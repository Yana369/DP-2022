import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Birds } from '../interfaces/birds';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
url:string="http://localhost:8080/lab1/Servlet1"

  constructor(private http:HttpClient) { }
  getBirds():Observable<Birds[]>{
    return this.http.get<Birds[]>(this.url);
  }
}
