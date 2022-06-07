import { Component, OnInit } from '@angular/core';
import { Birds } from '../interfaces/birds';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss']
})
export class UpdComponent implements OnInit {

  birdsList:Birds[]=[];
  selectedItem?:Birds;
  constructor(private service:Service1Service) { }



  getRest():void{
    this.service.getRest().subscribe(
      (rest1)=>{
        this.birdsList=rest1._embedded.birdses;
      }
    )
  }
  
  onSelect(birds:Birds){
    this.selectedItem=birds;
  }


  ngOnInit(): void {
    this.getRest();
  }
  
  updateRest(birds:Birds){
    this.service.putRest(this.selectedItem!._links.self.href, birds).subscribe(
      ()=>{
        this.getRest();
      }
    )
  }
  

}