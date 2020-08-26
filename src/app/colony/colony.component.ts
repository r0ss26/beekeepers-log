import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colonies } from '../../generated/graphql';
import { ColoniesService } from '../colonies.service';
import { GetColonyAndCollectionsQuery } from '../../generated/graphql';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { calculateOverproduction } from '../../utils/helpers'

@Component({
  selector: 'app-colony',
  templateUrl: './colony.component.html',
  styleUrls: ['./colony.component.scss'],
})
export class ColonyComponent implements OnInit {
  colonyId: string;
  colony;
  amount: Number;
  overproduction: Number = 0;
  subscription: Subscription;

  constructor(
    private coloniesService: ColoniesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.colonyId = params.id;
    });

    this.subscription = this.coloniesService
      .getColony(this.colonyId)
      .valueChanges.subscribe((result) => {
        this.colony = (result.data as GetColonyAndCollectionsQuery).colonies[0];
        this.amount = (this.colony.bees / this.colony.hives) * (6 * 0.26);
        this.overproduction = calculateOverproduction(this.colony);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
