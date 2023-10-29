import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttextboxComponent } from './producttextbox.component';

describe('ProducttextboxComponent', () => {
  let component: ProducttextboxComponent;
  let fixture: ComponentFixture<ProducttextboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducttextboxComponent]
    });
    fixture = TestBed.createComponent(ProducttextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
