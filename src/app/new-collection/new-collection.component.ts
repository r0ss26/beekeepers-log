import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { ColoniesService } from '../colonies.service';
import { NewCollectionFormComponent } from './new-collection-form/new-collection-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
})
export class NewCollectionComponent implements OnInit {
  @Input() colonyId: string;
  @Input() hives: number;

  private subscriptions = new Subscription();

  constructor(
    public dialog: MatDialog,
    private coloniesService: ColoniesService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewCollectionFormComponent);
    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        this.subscriptions.add(
          this.coloniesService
            .createCollection(
              result.amount,
              this.colonyId,
              result.date
            )
            .subscribe()
        );

        if (result.newHives) {
          console.log(this.colonyId);
          
          this.subscriptions.add(
            this.coloniesService
              .updateHives(this.colonyId, this.hives + result.newHives)
              .subscribe()
          );
        }
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscriptions) this.subscriptions.unsubscribe();
  }
}
