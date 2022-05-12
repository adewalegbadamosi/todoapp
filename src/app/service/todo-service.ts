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
   {"id":5, "item":"Complete codebase for client project" ,"timeLeft":moment().valueOf(),  "completed":false },

   {"id":6, "item":"Buy grocery1" ,"timeLeft":moment().valueOf() + 4*60*1000,  "completed":false},
   {"id":7, "item":"Wash car and prepare for work1", "timeLeft":moment().valueOf() + 3*60*1000,  "completed":false},
   {"id":8, "item":"Get to office and set up workspace1" ,"timeLeft":moment().valueOf() + 2*60*1000, "completed":false},
   {"id":9, "item":"Complete codebase for client project1" ,"timeLeft":moment().valueOf(),  "completed":false },
   {"id":10, "item":"Complete codebase for client project2" ,"timeLeft":moment().valueOf(),  "completed":false },
   {"id":11, "item":"Wash car and prepare for work2", "timeLeft":moment().valueOf() + 3*60*1000,  "completed":false},
   {"id":12, "item":"Get to office and set up workspace3" ,"timeLeft":moment().valueOf() + 2*60*1000, "completed":false},
   {"id":13, "item":"Complete codebase for client project4" ,"timeLeft":moment().valueOf(),  "completed":false },
   {"id":14, "item":"Complete codebase for client project9" ,"timeLeft":moment().valueOf(),  "completed":false }
 ]


 getTodos(){
  // sessionStorage.setItem("todos", JSON.stringify(this.todos));
   return this.todos;
 }

 

//  setNextRefreshTime()   {
//   const now   = moment();
//   const future = now.add(10, 'minutes');
//   const theTime =  future.format('YYYY-MM-DD HH:mm:ss');
//   window.sessionStorage.setItem('refreshAt', JSON.stringify(theTime));
// }

 

}
