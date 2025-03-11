import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [CardComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  items = [
    {
      detail: 'หมู เนื้อ ไก่',
      price: 500,
      img: '/images/item-set-1.png',
    },
    {
      detail: 'หมู ไก่',
      price: 250,
      img: '/images/item-set-2.png',
    },
    {
      detail: 'หมู เนื้อ ไก่ ผัก',
      price: 1500,
      img: '/images/item-set-3.png',
    },
  ];
}
