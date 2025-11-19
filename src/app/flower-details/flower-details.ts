import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FlowerData} from '../flower-data';
import {Flower} from '../json-structure';
import {Subscription} from 'rxjs';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-flower-details',
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './flower-details.html',
  styleUrl: './flower-details.css',
})
export class FlowerDetails {

  flower: Flower | undefined;

  flowerSub: Subscription | undefined;

  constructor(flowerData: FlowerData, route: ActivatedRoute) {

    let flowerId: string | null = route.snapshot.paramMap.get('id');
    if(flowerId !== null){
      this.flowerSub = flowerData.getFlowerById(flowerId).subscribe(
        (flower: Flower | undefined): void => {
          this.flower = flower;
        }
      )
    }

  }
}
