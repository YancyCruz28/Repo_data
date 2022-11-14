import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
  
   let response = this.productService.getProducts()

  // traduce el observable, hay que suscribirse
   response.subscribe((res: any) => {
   this.productService.products = res.data 
   console.log(this.productService.products)
   })
  }



  orderByPrice(){
    let products = this.productService.products || []
    let sortedProducts;
    if(products || products.lenght > 0){

      //para organizar de menos a mayor
      sortedProducts= products.sort((a: any, b: any) => (a.price > b.price) ? 1 : -1)
      this.productService.products = sortedProducts
      return
}
    return
  }


}
