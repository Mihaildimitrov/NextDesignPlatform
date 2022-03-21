import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEightSolidComponent } from './banner-eight-solid.component';

describe('BannerEightSolidComponent', () => {
  let component: BannerEightSolidComponent;
  let fixture: ComponentFixture<BannerEightSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerEightSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEightSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
