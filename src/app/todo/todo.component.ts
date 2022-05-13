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

  displayInputField:boolean = false;
  typing:boolean = false;
  displayModileOptions:boolean = false;


 
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
showMobileOptions(){
this.displayModileOptions =true;
}
  openInputField(){
    this.displayInputField = true;
  }

  closeInputField(){
    this.displayInputField = false;
    this.typing = false;

  }
  showTyping(event:any){
  
    if( event.target.value !="" )    this.typing = true;
  }
  addTodo(value : string, time:any){
    
      var invalid = false;
      if(value == "" || time == ""){
        Swal.fire("Invalid!","All fields are required","error");
        this.typing = false;
        invalid = true;
        return;
      }
  

    //Check duplicate
    var duplicate = false;
    this.allTodos.forEach(element => {
      if(element.item.toLowerCase() === value.toLowerCase()){
        Swal.fire("Duplicate!","Item already added","error");
        duplicate = true;
        this.typing = false;

        return;
      }
    })

    if(duplicate == false && invalid == false){

      var nextIndex =  this.todos.length - 1;
      var timeLeft = moment().add(parseInt(time), "minutes").valueOf();
      
      var newTodo = {"id":nextIndex, "item":value, "timeLeft": timeLeft, "completed":false};

      this.allTodos.push(newTodo);
      this.todos = this.allTodos;
      this.typing = false;

   
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
    
    this.displayModileOptions =false;

  }

  showActiveTodos(event: any){
    event.preventDefault();

    this.todos = this.allTodos.filter( x  => x.timeLeft > moment().valueOf()  );    
    this.displayModileOptions =false;
    
  }
  showCompletedTodos(event:any){
    event.preventDefault();

    this.todos = this.allTodos.filter( x  => x.completed == true );    
    this.displayModileOptions =false;
    
  }

  showAllTodos(event:any){
    event.preventDefault();
    
   
    this.todos = this.allTodos.map( x  => x );    
    this.displayModileOptions =false;

  }

  clearCompletedTodos(event: any){
    event.preventDefault();
    this.allTodos = this.allTodos.filter( x  => x.completed === false );    
    this.todos = this.todos.filter( x  => x.completed === false ); 
    this.displayModileOptions =false;

  
  
  }


}
