import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { ColoniesService } from '../colonies.service';
import { NewCollectionFormComponent } from './new-collection-form/new-collection-form.component';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
})
export class NewCollectionComponent implements OnInit {
  @Input() colonyId: string;

  constructor(
    public dialog: MatDialog,
    private coloniesService: ColoniesService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewCollectionFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      
      if (result)
        this.coloniesService.createCollection(
          result.amount,
          this.colonyId,
          new Date()
        );
    });
  }

  ngOnInit(): void {}
}
