import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColprojectsComponent } from './colprojects.component';

describe('ColprojectsComponent', () => {
  let component: ColprojectsComponent;
  let fixture: ComponentFixture<ColprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColprojectsComponent]
    });
    fixture = TestBed.createComponent(ColprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
