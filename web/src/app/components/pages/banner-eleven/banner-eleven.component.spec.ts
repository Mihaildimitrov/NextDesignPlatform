import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerElevenComponent } from './banner-eleven.component';

describe('BannerElevenComponent', () => {
  let component: BannerElevenComponent;
  let fixture: ComponentFixture<BannerElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
