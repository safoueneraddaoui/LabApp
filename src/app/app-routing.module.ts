import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from 'src/services/auth.guard';
import {ArticleListComponent} from './article-list/article-list.component';
import {ProfilComponent} from './profil/profil.component';
import {ArticleAffectComponent} from './article-affect/article-affect.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'members',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MemberListComponent,
        canActivateChild: [AuthGuard]
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
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: ArticleListComponent,
      },
      {
        path: ':id/affect',
        pathMatch: 'full',
        component: ArticleAffectComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: ArticleFormComponent
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: ArticleFormComponent
      },
    ]
  },
  {
    path: 'profil',
    pathMatch: 'full',
    component: ProfilComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent,
    //canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
