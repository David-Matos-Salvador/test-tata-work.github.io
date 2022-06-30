import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { AppState } from 'src/app/store/reducers/app.state';
import { selectAllTask } from '../../../../store/selectors/task.selector';
import * as TaskAction from '../../../../store/actions/task.action';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  tasks$: Observable<Task[]>;
  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectAllTask);
  }

  ngOnInit(): void {
    this.store.dispatch(TaskAction.enter());
  }
  closeAlert(task: Task) {
    this.store.dispatch(TaskAction.deleteTask({ task }));
  }
  clickAlert(task: Task) {
    this.store.dispatch(TaskAction.selectedTask({ idTask: task.id as number }));
  }
}
