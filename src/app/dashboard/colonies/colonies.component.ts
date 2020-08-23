import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Colony } from 'src/app/types';
import { MatTable } from '@angular/material/table';
import { ColoniesService } from '../../colonies.service';
import { Subscription } from 'rxjs';
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

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = [
    'colony',
    'created',
    'bees',
    'hives',
    'collectionDate',
    'addCollection',
  ];

  constructor(private coloniesService: ColoniesService) {}

  async ngOnInit() {
    this.subscription = this.coloniesService
      .getAllColoniesAndCollections()
      .valueChanges.subscribe((response) => {
        this.colonies = (response.data as GetAllColoniesAndCollectionsQuery).colonies;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
