import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Colony } from 'src/app/types';
import { MatTable } from '@angular/material/table';
import { ColoniesService } from '../../colonies.service';
import { Subscription } from 'rxjs';
import { calculateOverproduction} from '../../../utils/helpers'
import {
  Colonies,
  GetAllColoniesAndCollectionsQuery,
} from 'src/generated/graphql';

@Component({
  selector: 'app-colonies',
  templateUrl: './colonies.component.html',
  styleUrls: ['./colonies.component.scss'],
})
export class ColoniesComponent implements OnInit, OnDestroy {
  colonies: Colony[] = [];
  subscription: Subscription;
  coloniesOverproduction = [];
  loading = true;

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = [
    'colony',
    'created',
    'bees',
    'hives',
    'collectionDate',
    'overproduction',
    'addHive',
    'addCollection',
  ];

  constructor(private coloniesService: ColoniesService) {}

  ngOnInit(): void {
    console.log(this.loading);
    
    this.subscription = this.coloniesService
      .getAllColoniesAndCollections()
      .valueChanges.subscribe((response) => {
        
        this.loading = response.loading; 
        this.colonies = (response.data as GetAllColoniesAndCollectionsQuery).colonies;
        this.coloniesOverproduction = [];
        this.colonies.forEach(colony => {
          let overproduction = calculateOverproduction(colony)
            this.coloniesOverproduction.push({
              ...colony,
              overproduction
            })
          })
        this.table.renderRows();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
