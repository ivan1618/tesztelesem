import { Uzenet } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eredmenyek',
  templateUrl: './eredmenyek.component.html',
  styleUrls: ['./eredmenyek.component.scss'],
})
export class EredmenyekComponent implements OnInit {
  uzenetek: Uzenet[] = [];
  isLoading: boolean = false;
  nev?: any;

  private uzenetSub!: Subscription;

  constructor(public data: PostService, public router: Router) {}

  ngOnInit() {
    this.nev = this.data.getbejel();

    this.isLoading = true;
    this.data.getUzenetek();
    this.uzenetSub = this.data.lekerdezes().subscribe((uzenetek: Uzenet[]) => {
      this.uzenetek = uzenetek;
      this.isLoading = false;
    });
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
  }
  torles(uzenet: Uzenet) {
    this.data.torolUzenetek(uzenet._id);
    this.uzenetek.splice(this.uzenetek.indexOf(uzenet), 1);
  }

  ngOnDestroy() {
    this.uzenetSub.unsubscribe();
  }
}
