import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonOneComponent } from './coming-soon-one.component';

describe('ComingSoonOneComponent', () => {
  let component: ComingSoonOneComponent;
  let fixture: ComponentFixture<ComingSoonOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
