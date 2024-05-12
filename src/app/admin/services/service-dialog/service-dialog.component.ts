import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  service: string
}

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.css'],
  standalone: false,

})

export class ServiceDialogComponent {
  /**
   *
   */
  constructor(private dialogRef: MatDialogRef<ServiceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
