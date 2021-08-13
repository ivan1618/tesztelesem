import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-felhasznalok',
  templateUrl: './felhasznalok.component.html',
  styleUrls: ['./felhasznalok.component.scss'],
})
export class FelhasznalokComponent implements OnInit {
  constructor(public data: PostService, public http: HttpClient) {}
  felhasznalok!: {
    _id?: any;
    felhasznalo?: any;
    ido?: any;
  };
  valosak: string[] = [];
  ido: string[] = [];

  ngOnInit(): void {
    this.http
      .get('https://backendvercel.herokuapp.com/felhasznalok')
      .subscribe((postData) => {
        this.felhasznalok = postData;
        for (let i = 0; i < this.felhasznalok.felhasznalo.length; i++) {
          this.ido.push(this.felhasznalok.felhasznalo[i].ido);
          this.valosak.push(this.felhasznalok.felhasznalo[i].felhasznalo);
        }
      });
  }
}
