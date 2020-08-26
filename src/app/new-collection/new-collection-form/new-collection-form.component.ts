import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-collection-form',
  templateUrl: './new-collection-form.component.html',
  styleUrls: ['./new-collection-form.component.scss']
})
export class NewCollectionFormComponent implements OnInit {

  newCollectionForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
    newHives: new FormControl()
  })

  get amount() { return this.newCollectionForm.get('amount')}
  get date() { return this.newCollectionForm.get('date')}
  get newHives() { return this.newCollectionForm.get('newHives')}

  constructor(private dialogRef: MatDialogRef<NewCollectionFormComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() { 
    console.log(this.newCollectionForm.value);
     
    if (this.newCollectionForm.valid) this.dialogRef.close(this.newCollectionForm.value)
  }
}
