import {ChangeDetectionStrategy, Component, Inject,} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddTaskRequestDto} from "../../model/add-task.request.dto";

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskDialogComponent{
  public submitFunc: ((task: AddTaskRequestDto) => void) | undefined;
  public statuses: string[] | undefined
  public form : FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = new FormGroup({
      "title": new FormControl('', [Validators.required]),
      "status": new FormControl('backlog', [Validators.required]),
    });
    if (data) {
      this.submitFunc = data.submitFunc;
      this.statuses = data.statuses;
    }
  }

  onSubmit() {
    if (this.submitFunc) {
      const newTask: AddTaskRequestDto = {
        title: this.form.get('title')?.value,
        status: this.form.get('status')?.value,
        order: 1
      }
      this.submitFunc(newTask)
      this.dialogRef.close();
    }
  }
}
