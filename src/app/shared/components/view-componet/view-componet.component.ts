import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface ViewDialogData {
  title: string;
  message: string;
  cancelButtonLabel: string;
  submitButtonLabel: string;
}

@Component({
  selector: 'app-view-componet',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatIconModule],
  templateUrl: './view-componet.component.html',
  styleUrl: './view-componet.component.scss'
})
export class ViewComponetComponent {

  title: string; 
  // message: string;
  // cancelButtonLabel: string;
  // submitButtonLabel: string;


  constructor(
    public dialogRef: MatDialogRef<ViewComponetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewDialogData
  ) {
    this.title = data.title;
    // this.message = data.message;
    // this.cancelButtonLabel = data.cancelButtonLabel;
    // this.submitButtonLabel = data.submitButtonLabel;
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    this.dialogRef.close(true);
  }
}
