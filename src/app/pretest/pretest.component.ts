import { Component } from '@angular/core';

@Component({
  selector: 'app-pretest',
  templateUrl: './pretest.component.html',
  styleUrls: ['./pretest.component.css']
})
export class PretestComponent {

answer: any ;
answer1: any ;

result: any ;

value: String ="All";
value1: String= "NodeJS";

submit(pretest){

  let total=0;
  if(this.answer == this.value){
    total=total + 2;
    }
    if(this.answer1 == this.value1){
      total=total + 2;
    }
    this.result= total;
}

}




