import {Component, OnDestroy} from '@angular/core';
import {FlowerData} from '../flower-data';
import {Subscription} from 'rxjs';
import {Flower} from '../json-structure';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-flower-list',
  imports: [
    RouterLink
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
