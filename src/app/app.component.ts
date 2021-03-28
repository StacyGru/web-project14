import { Component, OnInit } from '@angular/core';
import { MyProduct } from './shared/models/myproduct.model';
import { MyFirstService } from './shared/services/my-first.service';
import { TestProductsService } from './shared/services/test-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project14';

  products: MyProduct[];

  constructor(
    private MyFirstService: MyFirstService,
    private testProductsService: TestProductsService
    ) {}

  ngOnInit()
  {
    // this.MyFirstService.mySuperFunction('Hello');
    this.products = this.testProductsService.MyProducts;
    console.log(this.products);
  }
}
