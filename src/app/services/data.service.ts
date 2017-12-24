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

}
