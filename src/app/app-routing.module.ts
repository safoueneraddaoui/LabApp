import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from 'src/services/auth.guard';
import {ArticleListComponent} from './article-list/article-list.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'members',
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MemberListComponent,
        //canActivateChild: [AuthGuard]
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: MemberFormComponent
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: MemberFormComponent
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleListComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'profil',
    pathMatch: 'full',
    component: ProfilComponent,
    //canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
