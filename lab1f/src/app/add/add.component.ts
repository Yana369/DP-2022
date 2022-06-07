import { Component, OnInit, Input, Output } from '@angular/core';
import { Birds } from '../interfaces/birds';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  BirdsList:Birds[]=[];
  
  constructor(private service:Service1Service) { }


  ngOnInit(): void {
    
  }

  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.BirdsList=rest1._embedded.birdses;
      }
    )
  }

  addRest(birds:Birds){
    this.service.postRest(birds).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }

}
