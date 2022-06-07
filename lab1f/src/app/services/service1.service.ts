import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Birds } from '../interfaces/birds';
import { Rest1 } from '../interfaces/rest1';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  url:string="http://localhost:1155/birdses";

constructor(private http:HttpClient) { }


getRest():Observable<Rest1>{
  return this.http.get<Rest1>(this.url);
}

postRest(bird:Birds):Observable<Birds>{
  return this.http.post<Birds>(this.url, bird);
}
putRest(link:string, bird:Birds):Observable<Birds>{
  return this.http.put<Birds>(link, bird);
}
deleteRest(bird:Birds):Observable<Birds>{
  return this.http.delete<Birds>(bird._links.self.href)
}

}
