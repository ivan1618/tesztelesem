import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { timer } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
})
export class SorterComponent implements OnInit {
  nev!: string;
  maximum = 200;
  myModel = 50;
  tarto = 50;
  maxgeneral: number = 900;
  hanyDarab: number = 50;
  szamok: number[] = [];
  constructor(public data: PostService, public router: Router) {}

  ngOnInit(): void {
    this.nev = this.data.getbejel();
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
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
