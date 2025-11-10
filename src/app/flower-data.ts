import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Catalog, Flower} from './json-structure';

@Injectable({
  providedIn: 'root',
})
export class FlowerData {

  constructor(private httpClient: HttpClient) {
  }

  getCatalog():Observable<Catalog>{
    return this.httpClient.get<Catalog>("/data/catalog.json");
  }

  getFlowerList(): Observable<Flower[]>{
    return this.getCatalog().pipe(
      map((catalog: Catalog): Flower[] => catalog.flowers)
    )
  }

  getFlowerById(flowerId: string): Observable<Flower | undefined>{
    return this.getFlowerList().pipe(
      map((flowers: Flower[]): Flower | undefined =>
        flowers.find((f: Flower): boolean => f.id === flowerId))
    )
  }
}
