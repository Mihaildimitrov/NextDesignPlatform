import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThirteenSolidComponent } from './banner-thirteen-solid.component';

describe('BannerThirteenSolidComponent', () => {
  let component: BannerThirteenSolidComponent;
  let fixture: ComponentFixture<BannerThirteenSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerThirteenSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerThirteenSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
