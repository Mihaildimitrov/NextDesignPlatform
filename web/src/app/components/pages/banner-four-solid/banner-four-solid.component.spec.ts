import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFourSolidComponent } from './banner-four-solid.component';

describe('BannerFourSolidComponent', () => {
  let component: BannerFourSolidComponent;
  let fixture: ComponentFixture<BannerFourSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFourSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFourSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
