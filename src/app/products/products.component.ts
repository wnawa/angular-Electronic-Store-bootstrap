import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  // product="Iphone 15"
  pruductArr = [
    {
      id: 1,
      Name: 'Iphone 15',
      detail:"Grey-128 GB.",
      imgPath: '../assets/iphone-15.jpg',
    },
    {
      id: 2,
      Name: 'Iphone 15 Pro',
      detail:"Grey 64 GB.",
      imgPath: '../assets/iphone-15-pro.jpg',
    },
    {
      id: 3,
      Name: 'Iphone 14',
      detail:"White 128 GB",
      imgPath: '../assets/iphone-14.jpg',
    },
    {
      id: 4,
      Name: 'Iphone 14 Pro',
      detail:"Black 256 GB.",
      imgPath: '../assets/iphone-14-pro.jpg',
    },
    {
      id: 5,
      Name: 'Iphone 13',
      detail:"Black 64 GB.",
      imgPath: '../assets/iphone-13.jpg',
    },
    {
      id: 6,
      Name: 'Iphone 13 Pro',
      detail:"Blue 128 GB.",
      imgPath: '../assets/iphone-13.jpg',
    },
    // {
    //   id: '7',
    //   Name: 'Iphone 12 Pro',
    //   detail:"",
    //   imgPath: '../assets/iphone-12-pro.jpg',
    // },
    {
      id: 7,
      Name: 'Iphone 12',
      detail:"Red 32 GB.",
      imgPath: '../assets/iphone-12.jpg',
    },

  ];

 
}
