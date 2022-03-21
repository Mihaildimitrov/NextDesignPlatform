import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNineSolidComponent } from './banner-nine-solid.component';

describe('BannerNineSolidComponent', () => {
  let component: BannerNineSolidComponent;
  let fixture: ComponentFixture<BannerNineSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerNineSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNineSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
