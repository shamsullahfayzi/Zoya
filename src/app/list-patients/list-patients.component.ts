import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
interface patient {
  id: number;
  patientName: string;
  province: string;
  contactNo: number;
  TOS: string;
  PRC: string;
  price: number;
  contactDate: Date;
  appointmentDate: Date;
  status: string;
  remarks: string;
  agentName: string;
  estimatedPrice: number;
  FPP: number;
  age: number;
  gender: number;

}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-list-patients',
  styleUrls: ['./list-patients.component.css'],
  templateUrl: './list-patients.component.html',
})
export class ListPatientsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'patientName',
    'contactNo', 'tos', 'price', 'appointmentDate',
    'status', 'estimatedPrice', 'age', 'gender'];
  dataSource: MatTableDataSource<patient>;
  loading = true;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private http: HttpClient) {
    let patients: any;
    http.get('https://localhost:7158/api/patients').subscribe((res: any) => {
      this.dataSource = res;
      patients = res;
      this.loading = false;


    }, err => console.log(err));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(patients);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
