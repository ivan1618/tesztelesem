import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Szavak, Alphabet } from './szavak';

@Component({
  selector: 'app-akasztofa',
  templateUrl: './akasztofa.component.html',
  styleUrls: ['./akasztofa.component.scss'],
})
export class AkasztofaComponent implements OnInit {
  nev!: string;
  constructor(public data: PostService, public router: Router) {}
  nyert = false;
  lehetoseg!: number;
  szavakModule = new Szavak();
  szavak = this.szavakModule.szavak;
  alphabetModule = new Alphabet();
  alphabet = this.alphabetModule.alphabet;
  valasztott!: number;
  szo: any;
  megjelenitendo: string[] = [];
  indexek: number[] = [];

  ngOnInit(): void {
    this.nyert = false;
    this.lehetoseg = 8;
    this.megjelenitendo = [];
    this.nev = this.data.getbejel();
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
    this.valasztott = Math.round(Math.random() * this.szavak.length);
    this.szo = Array.from(this.szavak[this.valasztott]);
    for (let i = 0; i < this.szo.length; i++) {
      this.megjelenitendo.push('_');
    }
  }

  lenyomott(betu: string, index: number) {
    (document.getElementById(index.toString())! as HTMLButtonElement).disabled =
      true;
    betu = betu.toLocaleLowerCase();
    if (this.szo.includes(betu)) {
      for (let i = 0; i < this.szo.length; i++) {
        if (this.szo.indexOf(betu, i) === -1) {
          break;
        } else {
          this.indexek.push(this.szo.indexOf(betu, i));
        }
      }

      for (let j = 0; j < this.indexek.length; j++) {
        this.megjelenitendo[this.indexek[j]] = betu;
      }
      this.indexek = [];
    } else {
      this.lehetoseg -= 1;
    }

    if (this.megjelenitendo.toString() == this.szo.toString()) {
      this.nyert = true;
    }
  }
  ujra() {
    this.ngOnInit();
  }
}
