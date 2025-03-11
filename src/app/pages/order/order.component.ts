import { Component } from '@angular/core';
import { ManageStateService } from '../../manage-state.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [CommonModule,RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  constructor(private service: ManageStateService) {}
  items: { detail: string; price: string; img: string }[] = [];
  sum: number = 0;
  ngOnInit() {
    const data = this.service.getSelectedItems()
    console.log("data :",data);
    data.forEach((item , index) =>{
      this.sum = this.sum + Number(item.price)
    })
    // this.sum = data.reduce((sum, item) => sum + item.price, 0);
    this.items = this.service.getSelectedItems();
  }
}
