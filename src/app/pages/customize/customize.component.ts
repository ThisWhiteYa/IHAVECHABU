import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customize',
  imports: [CardComponent, CommonModule,RouterLink], 
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'], 
})
export class CustomizeComponent {
  categories: {
    [key: string]: { detail: string; price: string; img: string }[];
  } = {
    เนื้อ: [
      {
        detail: 'เนื้อสันคอหมู',
        price: '150',
        img: '/images/menu/meat/XL_01094.jpg',
      },
      {
        detail: 'เนื้อปลาดอลลี่',
        price: '120',
        img: '/images/menu/meat/Shabu-shi095.jpg',
      },
    ],
    เมนูทะเล: [
      {
        detail: 'กุ้ง',
        price: '200',
        img: '/images/menu/seafood/fresh-shrimp2-1024x733.webp',
      },
      {
        detail: 'ปลาหมึก',
        price: '100',
        img: '/images/menu/seafood/product2.jpg',
      },
    ],
    น้ำ: [
      {
        detail: 'ชามะนาว',
        price: '30',
        img: '/images/menu/water/9227_Lemon Iced Tea.jpg',
      },
      {
        detail: 'น้ำเปล่า',
        price: '15',
        img: '/images/menu/water/012231290_P.jpg',
      },
    ],
  };
  activeCategory: string = 'เนื้อ';
  selectedItems: { detail: string; price: string; img: string }[] = [];

  selectCatagory(category: string) {
    this.activeCategory = category;
    this.selectedItems = this.categories[category] || [];
  }
  ngOnInit() {
    this.selectCatagory('เนื้อ');
  }
}
