import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
})
export class SorterComponent implements OnInit {
  maximum = 200;
  myModel = 50;
  tarto = 50;
  maxgeneral: number = 900;
  hanyDarab: number = 50;
  szamok: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.maxgeneral = window.innerHeight - window.innerHeight * 0.2;

    this.szamletrehozas(this.myModel);
    timer(0, 1).subscribe(() => {
      if (this.tarto !== this.myModel) {
        this.szamletrehozas(this.myModel);
        this.tarto = this.myModel;
      }
    });
  }

  getmaxim() {
    this.maximum = Math.round(window.innerWidth / 8);
    if (this.maximum < this.myModel) {
      this.myModel = this.maximum;
    }
    return this.maximum;
  }

  szamletrehozas(myModel: number) {
    this.szamok = [];
    for (var i = 0; i < myModel; i++) {
      this.szamok.push(Math.floor(Math.random() * this.maxgeneral + 1));
    }
  }

  BubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        for (let j = 0; j < array.length; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j];

            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }, (this.maximum / array.length) * 20 * i);
    }
  }
}
