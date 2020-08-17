import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/Todo';

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
      completed: true,
    },
    {
      task: 'look at cat memes',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
