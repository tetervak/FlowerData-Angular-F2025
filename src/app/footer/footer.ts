import {Component, input, InputSignal, signal, Signal} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  today: Signal<Date> = signal(new Date());
  name: InputSignal<string> = input<string>("Sheridan College");
}
