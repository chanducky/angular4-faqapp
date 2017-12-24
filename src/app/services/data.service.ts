import { Injectable } from '@angular/core';
import { Question} from "../models/Question";

@Injectable()
export class DataService {
  questions:Question[];
  constructor() { 
    this.questions=[
      {
        text:"What is your name..?",
        answer:"Chandu Yadav",
        hide:true
      },
      {
        text:"What is faveroite color..?",
        answer:"white",
        hide:true
      },
      {
        text:"What is your language?",
        answer:"Java",
        hide:true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
  }
  
  removeQuestion(question:Question){
    console.log('in remove '+question);
    for(let i=0;i<this.questions.length;i++){
      if(this.questions[i] == question){
        this.questions.splice(i,1);
      }
    }
  }

}
