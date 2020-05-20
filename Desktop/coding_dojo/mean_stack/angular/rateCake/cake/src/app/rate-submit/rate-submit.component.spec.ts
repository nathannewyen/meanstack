import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSubmitComponent } from './rate-submit.component';

describe('RateSubmitComponent', () => {
  let component: RateSubmitComponent;
  let fixture: ComponentFixture<RateSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
