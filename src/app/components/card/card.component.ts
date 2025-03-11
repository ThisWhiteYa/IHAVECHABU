import { Component, Input } from '@angular/core';
import { ManageStateService } from '../../manage-state.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private service: ManageStateService, private router: Router) {}

  @Input() item!: { detail: string; price: string; img: string };
  isSelect: boolean = false;
  url: string = '';
  selected() {
    this.isSelect = this.service.getCheckSelected(this.item) == -1 ? true : false;
    this.service.select(this.item);
    if (this.url == '/') {
      this.router.navigate(['/order']);
    }
  }
  ngOnInit() {
    this.url = this.router.url;
    this.isSelect =
      this.service.getCheckSelected(this.item) === -1 ? false : true;
  }
}
