import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class contactComponent implements OnInit {
  constructor(private http: Http) {}
  confirmationString: string = 'New contact has been Added !!';
  isAdded: boolean = false;
  contactObj: object = [];

  addNewcontact = function(contact) {
    this.contactObj = {
      contact_name: contact.contact_name,
      contact_email: contact.contact_email,
      contact_phone: contact.contact_phone
    };
    this.http
      .post('http://localhost:6633/contacts/', this.contactObj)
      .subscribe((res: Response) => {
        this.isAdded = true;
      });
  };
  ngOnInit() {}
}
