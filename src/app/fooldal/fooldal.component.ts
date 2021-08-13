import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss'],
})
export class FooldalComponent implements OnInit {
  nev!: string;
  idojaras_OBSERVABLE!: Observable<any>;
  varosID_OBSERVABLE!: Observable<any>;
  varosID: any;
  varos: string = '';
  varoskiir!: string;
  orszag!: string;
  finalWeather: any;
  hibasVaros: boolean = false;

  constructor(
    public data: PostService,
    public router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.nev = this.data.getbejel();
    if (this.nev === undefined) {
      this.router.navigateByUrl('/');
    }
  }

  varoslekerdezes(data: any) {
    this.hibasVaros = false;
    this.varosID_OBSERVABLE = this.http.get<any>(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=RzgpH4pxBLkuoVG1RiWGmNvdHGNBJVoS&q=${data}&language=hu-hu`
    );
    this.varosID_OBSERVABLE.subscribe(
      (data) => {
        if (data[0] == undefined) {
          this.hibasVaros = true;
          return;
        }
        this.varosID = data[0].Key;
        this.orszag = data[0].Country.LocalizedName;
        this.varoskiir = data[0].LocalizedName;
        this.idojaras_OBSERVABLE = this.http.get<any>(
          `http://dataservice.accuweather.com/currentconditions/v1/${this.varosID}?apikey=RzgpH4pxBLkuoVG1RiWGmNvdHGNBJVoS&language=hu-hu&details=false`
        );
        this.idojaras_OBSERVABLE.subscribe((data) => {
          this.finalWeather = data[0];
          this.varos = '';
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
