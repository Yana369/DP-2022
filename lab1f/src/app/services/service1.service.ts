import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Birds } from '../interfaces/birds';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  list = new BehaviorSubject<Birds[]>([]);
url:string="http://localhost:8080/lab1/Servlet1"

constructor(private http:HttpClient) { }
getBirds():Observable<Birds[]>{
  return this.http.get<Birds[]>(this.url);
}

postBirds(bird:Birds):Observable<Birds[]>{
  return this.http.post<Birds[]>(this.url, bird);
}
putBirds(bird:Birds):Observable<Birds[]>{
  return this.http.put<Birds[]>(this.url+"/"+bird.id, bird);
}
deleteBirds(bird:Birds):Observable<Birds[]>{
  return this.http.delete<Birds[]>(this.url+"/"+bird.id);
}
setList(list:Birds[]){
  this.list.next(list);
  }

}
