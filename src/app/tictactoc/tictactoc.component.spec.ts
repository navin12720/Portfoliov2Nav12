import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactocComponent } from './tictactoc.component';

describe('TictactocComponent', () => {
  let component: TictactocComponent;
  let fixture: ComponentFixture<TictactocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TictactocComponent]
    });
    fixture = TestBed.createComponent(TictactocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
