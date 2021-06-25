import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../post.service';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss'],
})
export class FooldalComponent implements OnInit {
  nev!: string;

  constructor(public data: PostService, public router: Router) {}

  ngOnInit() {
    this.nev = this.data.getbejel();
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
  }
}
