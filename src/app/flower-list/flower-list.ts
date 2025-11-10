import { Component } from '@angular/core';
import {FlowerData} from '../flower-data';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Catalog} from '../json-structure';

@Component({
  selector: 'app-flower-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './flower-list.html',
  styleUrl: './flower-list.css',
})
export class FlowerList {

  catalog: Observable<Catalog>;

  constructor(flowerData: FlowerData) {
    this.catalog = flowerData.getCatalog();
  }

}
