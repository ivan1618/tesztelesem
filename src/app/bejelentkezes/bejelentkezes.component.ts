import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.scss'],
})
export class BejelentkezesComponent implements OnInit {
  nev!: string;
  constructor(public data: PostService, public router: Router) {}

  ngOnInit(): void {}

  gombnyomas() {
    if ((<HTMLInputElement>document.getElementById('nev')).value) {
      this.data.bejel((<HTMLInputElement>document.getElementById('nev')).value);
      this.data.LoginNev(
        (<HTMLInputElement>document.getElementById('nev')).value
      );

      (<HTMLInputElement>document.getElementById('nev')).value = '';
      this.router.navigateByUrl('/fooldal');
    }
  }
}
