import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css'],
})
export class ProducttableComponent {
  @Input() data: any[] = [];

  @Output() sendcount = new EventEmitter();

  ngOnInit() {
    this.sendcount.emit(this.data);
  }
  @Input() searchdata: any;
  filteredItems: any[] = [];

  ngOnChanges() {
    this.filterItems();
  }

  filterItems() {
    if (!this.searchdata) {
      this.filteredItems = this.data;
      return;
    }

    const searchTerm = this.searchdata.toLowerCase();
    this.filteredItems = this.data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }
  delete(index: any) {
    this.filteredItems.splice(index, 1);
  }
}
