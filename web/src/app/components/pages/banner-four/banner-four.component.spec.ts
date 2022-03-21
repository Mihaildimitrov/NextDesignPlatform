import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFourComponent } from './banner-four.component';

describe('BannerFourComponent', () => {
  let component: BannerFourComponent;
  let fixture: ComponentFixture<BannerFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
