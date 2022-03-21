import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEightComponent } from './banner-eight.component';

describe('BannerEightComponent', () => {
  let component: BannerEightComponent;
  let fixture: ComponentFixture<BannerEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
