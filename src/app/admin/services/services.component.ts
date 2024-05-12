import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from 'src/app/admin services/admin-services.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { shareReplay } from 'rxjs';
interface Service {
  id: number;
  service: string;
}


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, MatIconModule, MatButtonModule],
})
export class ServicesComponent {

  displayedColumns: string[] = ['id', 'service', 'action'];
  services: Service[] = [

  ];
  service!: string;
  /**
   *
   */
  constructor(private _service: AdminService, private dialog: MatDialog) {

  }
  ngAfterViewInit() {
    this.service = '';
    this._service.getServices().subscribe((res: any) => this.services = res, err => console.log(err))
  }

  getTotalServices() {
    return this.services.length
  }
  openDialog() {
    const dialogRef = this.dialog.open(ServiceDialogComponent, { data: { service: this.service } });
    dialogRef.afterClosed().subscribe(result => {
      this.service = result
      this.newService();
    });


  }
  newService() {
    console.log('here')
    if (this.service.trim() == '') return
    const typeofServiceResource = { Service: this.service }
    this._service.newService(typeofServiceResource).subscribe(res => this.ngAfterViewInit(), err => console.log(err))
  }
  deleteService(id: any) {
    this._service.deleteService(id).subscribe(res => { this.ngAfterViewInit() }, err => console.log(err));
  }
}

