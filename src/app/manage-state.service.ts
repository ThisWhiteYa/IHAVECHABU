import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available app-wide
})
export class ManageStateService {
  private itemSelected: { detail: string; price: string; img: string }[] = [];

  constructor() {}

  select(selectedItem: { detail: string; price: string; img: string }) {
    const index = this.getCheckSelected(selectedItem)
    if (index !== -1) {
      this.itemSelected.splice(index, 1);
    } else {
      this.itemSelected.push(selectedItem);
    }
  }

  getCheckSelected(selectedItem: { detail: string; price: string; img: string }) {
    return this.itemSelected.findIndex(
      (item) => item.detail === selectedItem.detail
    );
  }

  getSelectedItems() {
    return this.itemSelected;
  }

  clearSelectedItems() {
    this.itemSelected = [];
  }
}
