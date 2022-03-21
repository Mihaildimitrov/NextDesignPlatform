import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonTwoComponent } from './coming-soon-two.component';

describe('ComingSoonTwoComponent', () => {
  let component: ComingSoonTwoComponent;
  let fixture: ComponentFixture<ComingSoonTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
