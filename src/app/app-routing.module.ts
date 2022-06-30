import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyLoggedGuard } from './core/guard/only-logged.guard';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./private/tasks/tasks.module').then((m) => m.TasksModule),
    canActivate: [OnlyLoggedGuard],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: '**', redirectTo: '/public' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
