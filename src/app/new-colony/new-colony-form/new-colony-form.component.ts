import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-colony-form',
  templateUrl: './new-colony-form.component.html',
  styleUrls: ['./new-colony-form.component.scss']
})
export class NewColonyFormComponent implements OnInit {
  newColonyForm = new FormGroup({
    bees: new FormControl('', [Validators.required, Validators.min(1)]),
    hives: new FormControl('', [Validators.required, Validators.min(1)])
  })

  get bees() { return this.newColonyForm.get('bees')}
  get hives() { return this.newColonyForm.get('hives')}

  constructor(private dialogRef: MatDialogRef<NewColonyFormComponent>) { }

  ngOnInit(): void { }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.newColonyForm.valid) this.dialogRef.close(this.newColonyForm.value)
  }
}
