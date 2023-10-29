import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-producttextbox',
  templateUrl: './producttextbox.component.html',
  styleUrls: ['./producttextbox.component.css'],
})
export class ProducttextboxComponent {
  text: any;
  @Output() count = new EventEmitter();
  @Output() search = new EventEmitter();
  filter(searchdata: any) {
    this.search.emit(searchdata);
  }
  array: any[] = [];
  getarray(data: any) {
    this.array = data;
  }
  constructor() {}

  ngOnInit() {
    this.count.emit(this.array);
  }
}
