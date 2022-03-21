import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTenComponent } from './banner-ten.component';

describe('BannerTenComponent', () => {
  let component: BannerTenComponent;
  let fixture: ComponentFixture<BannerTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
