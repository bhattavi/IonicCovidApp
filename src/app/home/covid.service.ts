import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = "https://coronavirus-19-api.herokuapp.com/countries";
    return this.http.get(url);
  }
}
