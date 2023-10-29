import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent {
  form: any = FormGroup;
  @Output() arraydata = new EventEmitter();
  array: any[] = [];
  proname: any;
  detail: any;
  address: any;
  ngOnInit() {
    this.form = new FormGroup({
      proname: new FormControl(null),
      detail: new FormControl(null),
      address: new FormControl(null),
    });
  }
  send() {
    if (
      this.proname.trim() !== '' &&
      this.detail.trim() !== '' &&
      this.address.trim() !== ''
    ) {
      this.array.push({
        name: this.proname,
        detail: this.detail,
        address: this.address,
      });
      this.proname = '';
      this.detail = '';
      this.address = '';
      this.arraydata.emit(this.array);
    }
  }
}
