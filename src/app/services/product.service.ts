import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //url para consumir todos los productos 
  URL_API = 'http://localhost:5000/product'

  //atributo

  products: any 

  constructor(public http:HttpClient) { }
  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }
}
