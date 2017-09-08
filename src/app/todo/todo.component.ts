import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  inputText : string;
  todos: any;
  todoObj:any;

  constructor() { 
    this.inputText= '';
    this.todos= [];
  }
    addTodo(){
      this.todoObj={
        inputText: this.inputText,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.inputText=''
    }


    deletetodo(index){
      this.todos.splice(index,1);
    }


    deleteSelectedTodos() {
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }
}