import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTwelveSolidComponent } from './banner-twelve-solid.component';

describe('BannerTwelveSolidComponent', () => {
  let component: BannerTwelveSolidComponent;
  let fixture: ComponentFixture<BannerTwelveSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTwelveSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTwelveSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
