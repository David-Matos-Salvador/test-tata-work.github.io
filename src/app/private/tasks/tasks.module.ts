import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ListTaskComponent } from './components/list-task/list-task.component';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, ListTaskComponent],
  imports: [TasksRoutingModule, SharedModule],
})
export class TasksModule {}
