import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component'
import { FavoriteListComponent } from "./favorite-list/favorite-list.component";

const routes: Routes = [
  {
    path: '',
    component: DogListComponent,
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'favorite',
    component: FavoriteListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
