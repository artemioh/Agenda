import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {}

  configUrl = 'assets/config.json';
  private apiUrl = 'https://agenda-ah.now.sh/api/Persons';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getPersons() {
    return this.http.get(this.apiUrl);
  }
}
