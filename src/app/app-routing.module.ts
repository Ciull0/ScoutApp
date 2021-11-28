import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PathComponent } from './path/path.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':team',
    component: PathComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
