import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  public product: Product
  public identity: any
  public products: any

  constructor(private _productService: ProductService) {
    this.product = new Product('','','','',0,0)
  }

  ngOnInit(): void {
    this.allProducts()
  }

  allProducts(){
    this._productService.allproduct().subscribe(
      response =>{
        this.products = response.products
      }
    )
  }

  addProduct(){
    this._productService.addproduct(this.product).subscribe(
      response=>{
        this.allProducts()
      }
    )
  }

  editProduct(){
    this._productService.editproduct(this.product).subscribe(
      response=>{
        this.allProducts()
      }
    )
  }

  deleteProduct(id: String){
    this._productService.deleteproduct(id).subscribe(
      response=>{
        this.allProducts()
      }
    )
  }

  idProduct(id: String){
    this._productService.findproductid(id).subscribe(
      response=>{
        this.product = response.product
      }
    )
  }

  sellProduct(){}

  findProduct(){}
}
