import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSevenComponent } from './banner-seven.component';

describe('BannerSevenComponent', () => {
  let component: BannerSevenComponent;
  let fixture: ComponentFixture<BannerSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
