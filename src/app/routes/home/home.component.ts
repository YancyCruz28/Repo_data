import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/* productsDB = [
  {
  title:"Arroz Roa", 
  description:"Lorem Ipsum is simply dummy text the printing and typesetting industry.", 
  image: "https://www.arrozroa.com/landingarrozroa/wp-content/uploads/2019/12/arroz-roa-fortiplus.png",
  btnColor: "warning", 
  price: "12000",
  btnText:"Comprar",
  cardSice:"18rem",
  stock:"3"
},
{
  title:"Arroz Roa", 
  description:"Lorem Ipsum is simply dummy text the printing and typesetting industry.", 
  image: "https://www.arrozroa.com/landingarrozroa/wp-content/uploads/2019/12/arroz-roa-fortiplus.png",
  btnColor: "warning", 
  price: "12000",
  btnText:"Comprar",
  cardSice:"18rem",
  stock:"3"
}
] */
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

}
