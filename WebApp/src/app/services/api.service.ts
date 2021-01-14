import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
          'x-rapidapi-key': "4722d1a837msha0e27d80b3bfc7bp1d45f0jsn35bdc3d3d787",
          'x-rapidapi-host': "restcountries-v1.p.rapidapi.com"
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
          'x-rapidapi-key': "4722d1a837msha0e27d80b3bfc7bp1d45f0jsn35bdc3d3d787",
          'x-rapidapi-host': "restcountries-v1.p.rapidapi.com"
        })
    }

    return this.http.get(endpoint, options);
  }
}
