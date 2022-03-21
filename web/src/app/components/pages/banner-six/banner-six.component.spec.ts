import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSixComponent } from './banner-six.component';

describe('BannerSixComponent', () => {
  let component: BannerSixComponent;
  let fixture: ComponentFixture<BannerSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
