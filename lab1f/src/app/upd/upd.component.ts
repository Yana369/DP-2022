import { Component, OnInit } from '@angular/core';
import { Birds } from '../interfaces/birds';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss']
})
export class UpdComponent implements OnInit {

  BirdsList:Birds[]=[];
  
  constructor(private service:Service1Service) { }


  getBirds():void{
    this.service.getBirds().subscribe(
      (birds)=>{
        this.BirdsList=birds;
        this.service.setList(birds);
      }
    )
  }

  ngOnInit(): void {
    this.getBirds();
  }
  
  updateBirds(birds:Birds){
    this.service.putBirds(birds).subscribe(
      ()=>{
        this.getBirds();
      }
    )
  }

}
