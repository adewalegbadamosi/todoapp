import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

 private todos: any = [
   {"id":1, "item":"Go to mall","timeLeft": moment().valueOf() + 6*60*1000, "completed":false},
   {"id":2, "item":"Buy grocery" ,"timeLeft":moment().valueOf() + 4*60*1000,  "completed":false},
   {"id":3, "item":"Wash car and prepare for work", "timeLeft":moment().valueOf() + 3*60*1000,  "completed":false},
   {"id":4, "item":"Get to office and set up workspace" ,"timeLeft":moment().valueOf() + 2*60*1000, "completed":false},
   {"id":5, "item":"Complete codebase for client project" ,"timeLeft":moment().valueOf(),  "completed":false }

 ]


 getTodos(){
  // sessionStorage.setItem("todos", JSON.stringify(this.todos));
   return this.todos;
 }

 


 

}
