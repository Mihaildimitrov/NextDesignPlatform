import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThirteenComponent } from './banner-thirteen.component';

describe('BannerThirteenComponent', () => {
  let component: BannerThirteenComponent;
  let fixture: ComponentFixture<BannerThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
