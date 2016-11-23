import { Component } from '@angular/core';
import { todoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title:string;
   toDoTasks:string[];
   service : todoService;

  constructor(private todoService : todoService){
    console.log("abccc");
    this.title = "First Angular app using @angular-cli";
    this.toDoTasks = todoService.getTodos();
    console.log(this.toDoTasks);
  }

    addTask(text:HTMLInputElement):void{
      if(text.value){
        this.todoService.addTodo(text);
        text.value = null;
      }
   }
   deleteTask(task:HTMLInputElement){
     this.todoService.deleteTodo(task);
   }
}
