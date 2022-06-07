import { Component, OnInit, Input, Output } from '@angular/core';
import { Birds } from '../interfaces/birds';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss']
})
export class RmComponent implements OnInit {
  BirdsList:Birds[]=[];
  constructor(private service:Service1Service) { }



  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.BirdsList=rest1._embedded.birdses;
      }
    )
  }
  


  ngOnInit(): void {
    this.getRest();
  }
  
  removeRest(birds:Birds){
    this.service.deleteRest(birds).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }
  

}
