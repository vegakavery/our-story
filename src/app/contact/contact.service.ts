import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(id: any){
    return this.http.get(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`)
  }
  getAllContacts(){
    return this.http.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile')
  }

  postContact(req: any){
    return this.http.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile' , req)
  }

  putContact(req: any){
    return this.http.put('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', req)
  }

  deleteContact(id: any){
    return this.http.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`)
  }

}
