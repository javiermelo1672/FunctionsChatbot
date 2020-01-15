import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/Contact';
import { SentformService } from 'src/services/sentform/sentform.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact= {} as Contact;
  constructor(private sentForm:SentformService) { }

  ngOnInit() {
  }
  onSubmitTemplate(){
    this.sentsForm();
  }

  sentsForm(){
    console.log(this.contact);
    this.sentForm.sentForm(this.contact);
    this.contact.name=null;
    this.contact.address=null;
    this.contact.email=null;
    this.contact.message=null;
    this.contact.organization=null;

  }

}
