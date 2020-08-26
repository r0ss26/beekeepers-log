import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColonyComponent } from './new-colony.component';

describe('NewColonyComponent', () => {
  let component: NewColonyComponent;
  let fixture: ComponentFixture<NewColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
