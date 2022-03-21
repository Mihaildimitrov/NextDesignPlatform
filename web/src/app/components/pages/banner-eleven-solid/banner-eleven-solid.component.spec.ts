import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerElevenSolidComponent } from './banner-eleven-solid.component';

describe('BannerElevenSolidComponent', () => {
  let component: BannerElevenSolidComponent;
  let fixture: ComponentFixture<BannerElevenSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerElevenSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerElevenSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
