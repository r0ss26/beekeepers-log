import { Component, OnInit, ViewChild } from '@angular/core';
import { ColoniesService } from '../colonies.service';
import { calculateOverproduction } from '../../utils/helpers';
import { Subscription } from 'rxjs';
import { GetAllColoniesAndCollectionsQuery } from '../../generated/graphql';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss'],
})
export class HivesComponent implements OnInit {
  colonies;
  coloniesOverProduction = [];
  subscription: Subscription;

  @ViewChild(MatTable) table: MatTable<any>

  displayedColumns = ['colony', 'overproduction'];

  constructor(private coloniesService: ColoniesService) {}

  ngOnInit(): void {
    this.subscription = this.coloniesService
      .getAllColoniesAndCollections()
      .valueChanges.subscribe((response) => {
        this.colonies = (response.data as GetAllColoniesAndCollectionsQuery).colonies;
        this.colonies.forEach(colony => {
          let overproduction = calculateOverproduction(colony)
          if (overproduction >= 150) {
            this.coloniesOverProduction.push({
              ...colony,
              overproduction
            })
          }
        })
        this.table.renderRows()
        console.log(this.coloniesOverProduction);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
