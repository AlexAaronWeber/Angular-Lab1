import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/Todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold Laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'eat breakfast',
      completed: false,
    },
    {
      task: 'look at cat memes',
      completed: false,
    },
  ];

  searchTerm: string;

  showIndex: number;

  constructor() {}
  //submit new task
  submitTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTask);
  }
  //delete item after clicking X button
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }
  //Complete task button function
  completeTask(index: number) {
    this.todos[index].completed = true;
  }
  //Search terms
  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }
  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((items) => {
        let currentTodo = items.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }
  //setShowIndex
  setShowIndex(index: number) {
    this.showIndex = index;
  }

  //make it so you can hit enter for updating tasks
  resetShowIndex() {
    this.showIndex = undefined;
  }

  ngOnInit(): void {}
}
