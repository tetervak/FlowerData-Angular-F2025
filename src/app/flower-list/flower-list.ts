import {Component, OnDestroy} from '@angular/core';
import {FlowerData} from '../flower-data';
import {AsyncPipe} from '@angular/common';
import {Observable, Subscription} from 'rxjs';
import {Catalog, Flower} from '../json-structure';

@Component({
  selector: 'app-flower-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './flower-list.html',
  styleUrl: './flower-list.css',
})
export class FlowerList implements OnDestroy {

  flowers: Flower[] = [];

  flowersSub: Subscription | undefined

  constructor(flowerData: FlowerData) {
    this.flowersSub = flowerData.getFlowerList().subscribe(
      (flowers: Flower[]): Flower[] => this.flowers = flowers
    );
  }

  ngOnDestroy() {
    this.flowersSub?.unsubscribe();
  }
}
