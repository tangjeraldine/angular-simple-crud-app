import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AddComponent } from './users/add/add.component';
import { DeleteComponent } from './users/delete/delete.component';
import { EditComponent } from './users/edit/edit.component';
import { ListComponent } from './users/list/list.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [
  {
    path: 'anime',
    component: AnimeComponent,
  },
  {
    path: 'users',
    children: [
      { path: '', component: ListComponent },
      { path: 'list', component: ListComponent },
      {
        path: 'view/:id',
        component: ViewComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
      },
      {
        path: 'create',
        component: AddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
