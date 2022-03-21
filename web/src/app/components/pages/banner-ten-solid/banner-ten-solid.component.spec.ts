import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTenSolidComponent } from './banner-ten-solid.component';

describe('BannerTenSolidComponent', () => {
  let component: BannerTenSolidComponent;
  let fixture: ComponentFixture<BannerTenSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTenSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTenSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
