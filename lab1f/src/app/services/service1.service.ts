import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Birds } from '../interfaces/birds';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
url:string="http://localhost:8080/lab1/Servlet1"

setService1Service: any;

constructor(private http:HttpClient) { }
getBirds():Observable<Birds[]>{
  return this.http.get<Birds[]>(this.url);
}

  setBirds(params: any):Observable<Object> {
    return this.http.put(this.url, {}, { params: params });
  }

}
