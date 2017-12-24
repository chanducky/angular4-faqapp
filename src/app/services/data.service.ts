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
    if(localStorage.getItem('questions') !==null){
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }else{
      this.questions=[];
    }
    
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
    let questionsLS=[];
    if(localStorage.getItem('questions') !=null){
      questionsLS = JSON.parse(localStorage.getItem('questions')); 
    }
    questionsLS.unshift(question);
    localStorage.setItem('questions',JSON.stringify(questionsLS));
    
  }
  
  removeQuestion(question:Question){
    
    for(let i=0;i<this.questions.length;i++){
      if(this.questions[i] == question){
        this.questions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }

}
