import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductsComponent,HeaderComponent,FooterComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-product-bootstrap';
  //interpolation data binding
  product="Iphone 15"
  pruductArr=["Iphone 15","Iphone 15 Pro","Iphone 14","Iphone 14 Pro","Iphone 13","Iphone 13 Pro"]
  imgPath="../assets/iphone-15.jpg"
  imgpathArr=[]
}
