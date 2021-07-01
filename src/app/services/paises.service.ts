import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  paises!: any

  constructor(private http: HttpClient) {

  }

  getAllPaises() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  getForName(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`)
  }

  getForContinent(cont: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${cont}`)
  }
}
