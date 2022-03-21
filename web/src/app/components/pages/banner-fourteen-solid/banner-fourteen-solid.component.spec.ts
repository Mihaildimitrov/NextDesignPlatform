import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFourteenSolidComponent } from './banner-fourteen-solid.component';

describe('BannerFourteenSolidComponent', () => {
  let component: BannerFourteenSolidComponent;
  let fixture: ComponentFixture<BannerFourteenSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFourteenSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFourteenSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
