import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Uzenet } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-szamolo',
  templateUrl: './szamolo.component.html',
  styleUrls: ['./szamolo.component.scss'],
})
export class SzamoloComponent implements OnInit {
  uzenetek: Uzenet[] = [];
  eredmeny?: string | undefined;
  ertek?: string | undefined;
  ertek2?: string | undefined;
  ertek3?: string | undefined;
  vege?: string | undefined;
  nev?: string;

  constructor(public data: PostService, public router: Router) {}

  ngOnInit() {
    this.nev = this.data.getbejel();
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
  }
  osszeadas(szam1: string, szam2: string) {
    return parseInt(szam1) + parseInt(szam2);
  }
  kivonas(szam1: string, szam2: string) {
    return parseInt(szam1) - parseInt(szam2);
  }
  szorzas(szam1: string, szam2: string) {
    return parseInt(szam1) * parseInt(szam2);
  }
  osztas(szam1: string, szam2: string) {
    return Math.round((parseInt(szam1) / parseInt(szam2)) * 1000) / 1000;
  }

  szamlalo(szam: string) {
    breakme: if (
      !this.ertek ||
      (szam !== '*' &&
        szam !== '/' &&
        szam !== '+' &&
        szam !== '-' &&
        !this.ertek2)
    ) {
      if (this.ertek) {
        this.ertek += szam;
      }
      if (!this.ertek) {
        this.ertek = szam;
      }
      this.eredmeny = this.ertek;

      break breakme;
    } else if (
      this.ertek &&
      !this.ertek2 &&
      (szam === '+' || szam === '-' || szam === '*' || szam === '/')
    ) {
      this.ertek2 = szam;
      this.eredmeny = szam;
      break breakme;
    } else if (
      (this.ertek && this.ertek2 && !this.ertek3) ||
      (szam != '=' && this.ertek3)
    ) {
      if (this.ertek3) {
        this.ertek3 += szam;
      }
      if (!this.ertek3) {
        this.ertek3 = szam;
      }
      this.eredmeny = this.ertek3;
    }
    if (szam === '=' && this.ertek && this.ertek2 && this.ertek3) {
      if (this.ertek2 === '+') {
        this.eredmeny = this.osszeadas(this.ertek, this.ertek3!).toString();
      }
      if (this.ertek2 === '-') {
        this.eredmeny = this.kivonas(this.ertek, this.ertek3!).toString();
      }
      if (this.ertek2 === '*') {
        this.eredmeny = this.szorzas(this.ertek, this.ertek3!).toString();
      }
      if (this.ertek2 === '/') {
        this.eredmeny = this.osztas(this.ertek, this.ertek3!).toString();
      }

      this.data.addUzenetek(
        this.ertek +
          ' ' +
          this.ertek2 +
          ' ' +
          this.ertek3 +
          ' = ' +
          this.eredmeny!
      );

      this.ertek = undefined;
      this.ertek2 = undefined;
      this.ertek3 = undefined;
    }
    if (szam === '=' && (!this.ertek || !this.ertek2 || !this.ertek3)) {
      this.ertek = undefined;
      this.ertek2 = undefined;
      this.ertek3 = undefined;
    }
  }
}
