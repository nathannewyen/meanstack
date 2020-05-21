import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAuthorComponent } from './review-author.component';

describe('ReviewAuthorComponent', () => {
  let component: ReviewAuthorComponent;
  let fixture: ComponentFixture<ReviewAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
