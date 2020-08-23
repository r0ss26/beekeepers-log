import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-collection-form',
  templateUrl: './new-collection-form.component.html',
  styleUrls: ['./new-collection-form.component.scss']
})
export class NewCollectionFormComponent implements OnInit {

  newCollectionForm = new FormGroup({
    amount: new FormControl(''),
    date: new FormControl('')
  })

  constructor(private dialogRef: MatDialogRef<NewCollectionFormComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {  
    this.dialogRef.close(this.newCollectionForm.value)
  }
}
