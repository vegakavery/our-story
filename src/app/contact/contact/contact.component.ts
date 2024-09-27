import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstname = '';
  lastname = '';
  email = '';
  gender = '';
  age = '';
  phone = '';
  pan = '';
  aadhar = '';
  details: any = [];
  deletedContact: any;
  delete: boolean = false;
  id = 1;
  getId: any;
  contactDetail: any;
  getDets: boolean = false;
  putContact: any;

  constructor(private contactService: ContactService) {}

  ngOnInit() {

    this.contactService.getAllContacts().subscribe((data) => {
      this.details.push(data);
    });

  }

  getContactDetail(){
    this.getDets = true;
    this.contactService.getContacts(this.getId).subscribe((data) => {
      this.contactDetail= data;
    });
  }
  
  onSubmit() {
    let req = {
      createdAt: new Date(),
      first_name: this.firstname,
      last_name: this.lastname,
      emailId: this.email,
      age: this.age,
      gender: this.gender,
      mobilenumber: this.phone,
      pan_no: this.pan,
      adhaar_no: this.aadhar,
      status: true,
    };
    this.contactService.postContact(req).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete() {
    this.delete = true;
    this.contactService.deleteContact(this.id).subscribe((data) => {
      this.deletedContact = data;
    });
  }
  
  onPut(){
    let req ={
      "createdAt":"2024-02-05",
      "first_name":"testval",
      "last_name":"data",
      "emailId":"test@gmail.com",
      "age":20,
      "gender":"Male",
      "mobilenumber":8956231478,
      "pan_no":"CGBPA001",
      "adhaar_no":"895678954569",
      "status":true
      }
    this.contactService.putContact(req).subscribe((data) => {
      this.putContact = data;
    });
  }
}
