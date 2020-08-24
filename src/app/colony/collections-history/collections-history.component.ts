import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-collections-history',
  templateUrl: './collections-history.component.html',
  styleUrls: ['./collections-history.component.scss']
})
export class CollectionsHistoryComponent {
  @Input() collections;
  @Input() colonyId

  displayedColumns: string[] = [
    'date',
    'amount'
  ];

  constructor() { }

}
