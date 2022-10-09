import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList$!: Observable<any[]>;
 

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductList();
  }

}
