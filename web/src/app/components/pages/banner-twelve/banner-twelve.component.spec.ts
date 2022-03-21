import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTwelveComponent } from './banner-twelve.component';

describe('BannerTwelveComponent', () => {
  let component: BannerTwelveComponent;
  let fixture: ComponentFixture<BannerTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
