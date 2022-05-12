import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo-service'
import Swal from 'sweetalert2';
import * as moment from 'moment';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  isLight:boolean = true;
  fillLight: boolean = true;

  mobileBanner: string = "./../../assets/img/images/bg-mobile-light.jpg";
  desktopBanner: string = "./../../assets/img/images/bg-desktop-light.jpg";

  mode:string= "light";
  modeTitle:string = "Dark Mode";


  todos: any[] = [];
  allTodos:any[] = [];

 
  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
  
    this.initializeTodos();
  }

  changeMode(){
    if(this.isLight){
      this.modeTitle = "Light Mode";
      this.isLight = false;
      this.fillLight = false;
      this.mobileBanner = "./../../assets/img/images/bg-mobile-dark.jpg";
      this.desktopBanner = "./../../assets/img/images/bg-desktop-dark.jpg";


    }
    else{
      this.modeTitle = "Dark";
      this.isLight = true;
      this.fillLight = true;
      this.mobileBanner = "./../../assets/img/images/bg-mobile-light.jpg";
      this.desktopBanner = "./../../assets/img/images/bg-desktop-light.jpg";


    }
  }

  initializeTodos(){
    this.todos = this.todoService.getTodos();
    this.allTodos = this.todoService.getTodos();
    
  }

  addTodo(value : string, time:any){
    //Check duplicate
    var duplicate = false;
    this.allTodos.forEach(element => {
      if(element.item.toLowerCase() === value.toLowerCase()){
        Swal.fire("Duplicate!","Item already added","error");
        duplicate = true;
        return;
      }
    })

    if(duplicate == false){

      var nextIndex =  this.todos.length - 1;
      var timeLeft = moment().add(parseInt(time), "minutes").valueOf();
      
      var newTodo = {"id":nextIndex, "item":value, "timeLeft": timeLeft, "completed":false};

      this.allTodos.push(newTodo);
      this.todos = this.allTodos;

   
    }


  }
  deleteTodo(item:string){

    this.allTodos = this.allTodos.filter( x => {return x.item != item; });
    this.todos = this.todos.filter( x => {return x.item != item; });
   
  }

  markCompletedTodos(value :string){
    this.todos.forEach( element => {
      if( element.item.toLowerCase() === value.toLocaleLowerCase()){
        element.completed = true;
      }
    })
  }

  showFiveMinLeftTodos(event:any){
    event.preventDefault();

    this.todos = this.allTodos.filter( (x) => (x.timeLeft - 5*60*1000) < moment().valueOf() && (x.timeLeft) > moment().valueOf());
    

  }

  showActiveTodos(event: any){
    event.preventDefault();

    this.todos = this.allTodos.filter( x  => x.timeLeft > moment().valueOf()  );    
    
  }
  showCompletedTodos(event:any){
    event.preventDefault();

    this.todos = this.allTodos.filter( x  => x.completed == true );    
  
  }

  showAllTodos(event:any){
    event.preventDefault();
    
    // var todosString = "todos";
    // var todos:any = sessionStorage.getItem(todosString) ? sessionStorage.getItem(todosString) : [];
    // this.todos = todos;
    this.todos = this.allTodos.map( x  => x );    

    // this.todos = this.allTodos;
  }

  clearCompletedTodos(event: any){
    event.preventDefault();
    this.allTodos = this.allTodos.filter( x  => x.completed === false );    
    this.todos = this.todos.filter( x  => x.completed === false );    
    // this.todos = this.allTodos;
  
  }


}
