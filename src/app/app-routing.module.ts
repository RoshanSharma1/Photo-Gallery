import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserComponent }      from './components/user/user.component';
import { AlbumComponent }      from './components/album/album.component';
import { PhotoComponent }      from './components/photo/photo.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'photos', component: PhotoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }