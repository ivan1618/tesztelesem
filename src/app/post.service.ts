import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uzenet } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  host = 'https://backendvercel.herokuapp.com/api/uzenetek'; //'http://localhost:3000/api/uzenetek';

  public uzenetek: Uzenet[] = [];
  private Ujabbak = new Subject<Uzenet[]>();
  email!: string;

  nev!: string;

  bejel(nev: string) {
    this.nev = nev;
    window.localStorage.setItem('nev', nev);
  }
  getbejel() {
    if (window.localStorage.getItem('nev')) {
      this.nev = window.localStorage.getItem('nev')!;
    }
    return this.nev;
  }

  constructor(private http: HttpClient) {}
  getUzenetek() {
    this.http
      .get<{ message: string; uzenetek: Uzenet[] }>(this.host + '/' + this.nev)
      .subscribe((postData) => {
        this.uzenetek = postData.uzenetek;
        this.Ujabbak.next(this.uzenetek);
      });
  }

  lekerdezes() {
    return this.Ujabbak.asObservable();
  }

  addUzenetek(uzenett: string) {
    const uzenet: Uzenet = {
      _id: null,
      uzenete: uzenett,
      nev: this.nev,
    };
    this.http.post<{ message: string }>(this.host, uzenet).subscribe((res) => {
      this.uzenetek.push(uzenet);
      this.Ujabbak.next([...this.uzenetek]);
    });
  }

  torolUzenetek(id: string) {
    this.http.delete(this.host + '/' + id).subscribe(() => {});
  }

  addEmail(subjects: string, texts: string) {
    const email = {
      subject: subjects,
      text: texts,
    };
    this.http
      .post(
        'https://backendvercel.herokuapp.com/emailek' /* https://localhost:3000/emailek */,
        email
      )
      .subscribe();
  }
  LoginNev(nev: string) {
    const elkuldott = {
      nev: this.nev,
    };
    this.http
      .post('https://backendvercel.herokuapp.com/felhasznalok', elkuldott)
      .subscribe();
  }
}
