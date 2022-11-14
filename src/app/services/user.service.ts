import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.modules';

@Injectable({
  providedIn: 'root'
})
export class UserService {
URL_API = "http://localhost:5000/user"
users: any
currentUser: User

  constructor(public http: HttpClient) { 
    this.currentUser = new User()
  }
  getUsers(){
    return this.http.get(`${this.URL_API}/get-user`)
  }
  createUsers(data: User){
    return this.http.post(`${this.URL_API}/create-user`, data)
  }
  deleteUsers(id: string){
    return this.http.delete(`${this.URL_API}/delete-user?id=${id}`)
  }
  updateUsers(id: string, data: any){
    return this.http.put(`${this.URL_API}/update-user?id=${id}`, data)
  }
}


