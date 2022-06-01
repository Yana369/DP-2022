import { Component, OnInit, Input, Output } from '@angular/core';
import { Birds } from '../interfaces/birds';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss']
})
export class RmComponent implements OnInit {


  

  birdsList:Birds[]=[];
  constructor(private service:Service1Service) { }



  getBirds():void{
    this.service.getBirds().subscribe(
      (birds)=>{
        this.birdsList=birds;
        this.service.setList(birds);
      }
    )
  }
  


  ngOnInit(): void {
    this.getBirds();
  }
  
  removeBirds(birds:Birds){
    this.service.deleteBirds(birds).subscribe(
      ()=>{
        this.getBirds();
      }
    )
  }
  

}
