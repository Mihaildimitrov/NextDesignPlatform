import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSixSolidComponent } from './banner-six-solid.component';

describe('BannerSixSolidComponent', () => {
  let component: BannerSixSolidComponent;
  let fixture: ComponentFixture<BannerSixSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSixSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSixSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
