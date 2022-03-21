import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNineComponent } from './banner-nine.component';

describe('BannerNineComponent', () => {
  let component: BannerNineComponent;
  let fixture: ComponentFixture<BannerNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
