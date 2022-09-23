import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/getproductlist";
  private addProductURL = "http://localhost:8080/addproduct";
  private getProductByIdURL = "http://localhost:8080/getproductbyid";
  private updateProductByIdURL = "http://localhost:8080/updateproduct";
  private deleteProductURL = "http://localhost:8080/deleteproductbyid";
  private paymentDetailsURL = "http://localhost:8080/paymentgateway/createOrder";

  constructor(private httpClient:HttpClient) { }

  getProductList() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.addProductURL}`, product );
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.getProductByIdURL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.updateProductByIdURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    
    return this.httpClient.delete(`${this.deleteProductURL}/${id}`);
  }

  paymentDetails(id: number, product: Product): Observable<Object>{
    
    return this.httpClient.post(`${this.paymentDetailsURL}`, product);
  }

}
