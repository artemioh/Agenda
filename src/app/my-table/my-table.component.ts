import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import { PersonService } from '../services/person.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent implements OnInit {
  dataSource = new PersonDataSource(this.personService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'lastName', 'phone'];

  constructor(private personService: PersonService) {
    this.personService.getConfig().subscribe( config => {
      console.log(config);
    });

    // this.personService.getPersons().subscribe( persons => {
    //  console.log(persons);
    // });
  }

  ngOnInit() {
  }
}

export class PersonDataSource extends DataSource<any> {
  constructor(private personService: PersonService) {
    super();
  }

  connect(): Observable<any> {
    return this.personService.getPersons();
  }

  disconnect() {}
}
