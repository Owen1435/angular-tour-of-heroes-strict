import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../model/task";

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent {

  @Input()
  title: string = ''
  @Input()
  tasks: Task[] = []

  @Output()
  dropTask: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
