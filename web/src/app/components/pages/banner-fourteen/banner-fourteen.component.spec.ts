import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFourteenComponent } from './banner-fourteen.component';

describe('BannerFourteenComponent', () => {
  let component: BannerFourteenComponent;
  let fixture: ComponentFixture<BannerFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
