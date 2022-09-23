import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService , private router:Router) { }

  ngOnInit(): void {
  }

   saveProduct(){
     this.productService.addProduct(this.product).subscribe( data =>{
       console.log(data);
       this.goToProductList();
    },
    error => console.log(error));
  }

   goToProductList(){
    this.router.navigate(['/products']);
   }
  
  onSubmit(){
  
     console.log(this.product);
    this.saveProduct();
  
}
}