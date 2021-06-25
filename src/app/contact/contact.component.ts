import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailje!: string;
  subject!: string;
  text!: string;
  constructor(public data: PostService) {}

  ngOnInit(): void {}

  emailerosit() {
    this.text = this.emailje + '\n' + this.text;
    this.data.addEmail(this.subject, this.text);
    this.subject = '';
    this.text = '';
    this.emailje = '';
  }
}
