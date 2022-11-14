import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
//propiedades que queremos recibir a traves del componente
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() image: string | undefined
  @Input() btnText: string | undefined
  @Input() price: string | undefined
  @Input() btnColor: string | undefined
  @Input() cardSice: string | undefined
  @Input() stock: string | undefined



  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  buy(): void {
    alert("Añadir al carrito")
  }
  notAvailable(): void {
    alert("No hay stock disponible")
  }

}
