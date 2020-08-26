import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewColonyFormComponent } from './new-colony-form/new-colony-form.component';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ColoniesService } from '../colonies.service';

@Component({
  selector: 'app-new-colony',
  templateUrl: './new-colony.component.html',
  styleUrls: ['./new-colony.component.scss'],
})
export class NewColonyComponent implements OnInit {

  private subscription: Subscription
  
  constructor(
    public dialog: MatDialog,
    private coloniesService: ColoniesService,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewColonyFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subscription = this.coloniesService
          .createColony(result.bees, result.hives)
          .subscribe();
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
