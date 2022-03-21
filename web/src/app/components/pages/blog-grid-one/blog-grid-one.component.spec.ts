import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridOneComponent } from './blog-grid-one.component';

describe('BlogGridOneComponent', () => {
  let component: BlogGridOneComponent;
  let fixture: ComponentFixture<BlogGridOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
