import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { AppState } from 'src/app/store/reducers/app.state';
import { selectActiveTaskId, selectedActiveTask } from 'src/app/store/selectors/task.selector';
import * as TaskAction from '../../../../store/actions/task.action';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task$!: Observable<Task>;
  id$!:Observable<number | null>
  description: string = '';

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.task$ = this.store.select(
      selectedActiveTask
    ) as unknown as Observable<Task>;
    this.task$.subscribe(
      (task) => (this.description = task?.description ? task.description : '')
    );
    this.id$ = this.store.select(selectActiveTaskId)
  }
  addOrEditTask() {
    this.store.dispatch(
      TaskAction.addOrEditTask({
        task: { id: null, description: this.description },
      })
    );
    this.description = '';
  }
  buttonDisabled(): boolean {
    const value = this.description?.trim();
    return value == undefined || value == null || value == '';
  }
}
