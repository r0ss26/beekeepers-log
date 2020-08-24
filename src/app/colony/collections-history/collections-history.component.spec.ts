import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHistoryComponent } from './collections-history.component';

describe('CollectionsHistoryComponent', () => {
  let component: CollectionsHistoryComponent;
  let fixture: ComponentFixture<CollectionsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
