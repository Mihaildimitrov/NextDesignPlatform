import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThreeSolidComponent } from './banner-three-solid.component';

describe('BannerThreeSolidComponent', () => {
  let component: BannerThreeSolidComponent;
  let fixture: ComponentFixture<BannerThreeSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerThreeSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerThreeSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
