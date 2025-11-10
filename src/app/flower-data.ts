import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Catalog} from './json-structure';

@Injectable({
  providedIn: 'root',
})
export class FlowerData {

  constructor(private httpClient: HttpClient) {
  }

  getCatalog():Observable<Catalog>{
    return this.httpClient.get<Catalog>("/data/catalog.json");
  }
}
