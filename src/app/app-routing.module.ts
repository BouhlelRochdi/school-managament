import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserComponent } from 'src/components/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    children: [
      {
        path: '', loadChildren: () => import('../modules/user/src/lib/user.module').then(m => m.UserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }
