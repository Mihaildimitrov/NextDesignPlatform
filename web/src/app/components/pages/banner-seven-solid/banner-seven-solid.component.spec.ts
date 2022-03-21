import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSevenSolidComponent } from './banner-seven-solid.component';

describe('BannerSevenSolidComponent', () => {
  let component: BannerSevenSolidComponent;
  let fixture: ComponentFixture<BannerSevenSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSevenSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSevenSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
