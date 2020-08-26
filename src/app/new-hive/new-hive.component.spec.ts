import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHiveComponent } from './new-hive.component';

describe('NewHiveComponent', () => {
  let component: NewHiveComponent;
  let fixture: ComponentFixture<NewHiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
