import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColonyFormComponent } from './new-colony-form.component';

describe('NewColonyFormComponent', () => {
  let component: NewColonyFormComponent;
  let fixture: ComponentFixture<NewColonyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColonyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColonyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
