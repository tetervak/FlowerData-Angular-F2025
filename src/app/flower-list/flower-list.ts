import { Component } from '@angular/core';
import {FlowerData} from '../flower-data';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Catalog, Flower} from '../json-structure';

@Component({
  selector: 'app-flower-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './flower-list.html',
  styleUrl: './flower-list.css',
})
export class FlowerList {

  flowers: Observable<Flower[]>;

  constructor(flowerData: FlowerData) {
    this.flowers = flowerData.getFlowerList();
  }

}
