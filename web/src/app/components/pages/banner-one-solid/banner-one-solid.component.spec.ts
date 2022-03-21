import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOneSolidComponent } from './banner-one-solid.component';

describe('BannerOneSolidComponent', () => {
  let component: BannerOneSolidComponent;
  let fixture: ComponentFixture<BannerOneSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerOneSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerOneSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
