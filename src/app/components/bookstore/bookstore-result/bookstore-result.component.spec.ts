import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreResultComponent } from './bookstore-result.component';

describe('BookstoreResultComponent', () => {
  let component: BookstoreResultComponent;
  let fixture: ComponentFixture<BookstoreResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
