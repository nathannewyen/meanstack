import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeInfoComponent } from './cake-info.component';

describe('CakeInfoComponent', () => {
  let component: CakeInfoComponent;
  let fixture: ComponentFixture<CakeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
