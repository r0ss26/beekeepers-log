import { Component, ViewChild } from '@angular/core';
import { ColoniesService } from '../colonies.service';
import { Subscription } from 'rxjs';
import { GetAllColoniesAndCollectionsQuery } from '../../generated/graphql';
import { daysSinceLastCollection } from '../../utils/helpers';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { calculateOverproduction } from '../../utils/helpers'

@Component({
  selector: 'app-upcoming-collections',
  templateUrl: './upcoming-collections.component.html',
  styleUrls: ['./upcoming-collections.component.scss'],
})
export class UpcomingCollectionsComponent {
  colonies;
  coloniesOverproduction;
  filteredResult = [];
  subscription: Subscription;
  filter: string = 'today';

  displayedColumns: string[] = [
    'colony',
    'created',
    'bees',
    'hives',
    'collectionDate',
    'amount',
    'addCollection',
  ];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private coloniesService: ColoniesService) {
    this.colonies = new MatTableDataSource();
  }

  ngOnInit() {
    this.subscription = this.coloniesService
      .getAllColoniesAndCollections()
      .valueChanges.subscribe((response) => {
        this.colonies = (response.data as GetAllColoniesAndCollectionsQuery).colonies;
        this.coloniesOverproduction = [];
        this.colonies.forEach(colony => {
          let overproduction = calculateOverproduction(colony)
            this.coloniesOverproduction.push({
              ...colony,
              overproduction
            })
          })
        this.table.renderRows()
        this.filterResults();
      });
  }

  filterResults() {
    this.filteredResult = this.coloniesOverproduction.filter((colony) => {
      console.log(daysSinceLastCollection(colony));
      
      return this.filter === 'today'
        ? daysSinceLastCollection(colony) === 6
        : daysSinceLastCollection(colony) === 5;
    });
    this.table.renderRows();
  }

  onTabChange($event): void {
    console.log($event);
    this.filter = $event.index === 0 ? 'today' : 'tomorrow';
    this.filterResults();
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
