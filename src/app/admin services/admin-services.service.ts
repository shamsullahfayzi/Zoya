import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
interface TypeofServiceResource {
  Service: string;
}
@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private readonly ROUTE = "https://localhost:7158/api/services/";

  constructor(private http: HttpClient) {

  }
  getServices() {
    return this.http.get(`${this.ROUTE}`).pipe(map(res => res))
  }
  newService(TypeofServiceResource: TypeofServiceResource) {
    console.log(TypeofServiceResource)
    return this.http.post(`${this.ROUTE}new?Service=${TypeofServiceResource.Service}`, {}).pipe(map(res => res))
  }
  deleteService(id: number) {
    return this.http.delete(`${this.ROUTE}delete?id=${id}`).pipe(map(res => res))
  }
}
