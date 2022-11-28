import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnsuccesfulPaymentComponent } from './page-unsuccesful-payment.component';

describe('PageUnsuccesfulPaymentComponent', () => {
  let component: PageUnsuccesfulPaymentComponent;
  let fixture: ComponentFixture<PageUnsuccesfulPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUnsuccesfulPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnsuccesfulPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
