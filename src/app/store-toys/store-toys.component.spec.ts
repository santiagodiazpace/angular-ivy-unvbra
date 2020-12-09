import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreToysComponent } from './store-toys.component';

describe(' StoreToysComponent', () => {
  let component:  StoreToysComponent;
  let fixture: ComponentFixture< StoreToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
