import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTwoSolidComponent } from './banner-two-solid.component';

describe('BannerTwoSolidComponent', () => {
  let component: BannerTwoSolidComponent;
  let fixture: ComponentFixture<BannerTwoSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTwoSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTwoSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
