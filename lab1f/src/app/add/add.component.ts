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

  getBirds():void{
    this.service.getBirds().subscribe(
      (birds)=>{
        this.BirdsList=birds;
        this.service.setList(birds);
      }
    )
  }

  addBirds(birds:Birds){
    this.service.postBirds(birds).subscribe(
      ()=>{
        this.getBirds();
      }
    )
  }

}
