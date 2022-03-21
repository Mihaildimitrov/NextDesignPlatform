import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThreeComponent } from './banner-three.component';

describe('BannerThreeComponent', () => {
  let component: BannerThreeComponent;
  let fixture: ComponentFixture<BannerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
