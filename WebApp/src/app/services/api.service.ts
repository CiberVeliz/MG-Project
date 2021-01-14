import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountries()
  {
    let endpoint = 'https://restcountries-v1.p.rapidapi.com/all';

    let options = {
      headers: new HttpHeaders(
        {
          'x-rapidapi-key': environment.api_key,
          'x-rapidapi-host': environment.api_host
        })
    }

    return this.http.get(endpoint, options);
  }

  getCountry(code: string)
  {
    let endpoint = 'https://restcountries-v1.p.rapidapi.com/alpha/'+code;

    let options = {
      headers: new HttpHeaders(
        {
          'x-rapidapi-key': environment.api_key,
          'x-rapidapi-host': environment.api_host
        })
    }

    return this.http.get(endpoint, options);
  }
}
