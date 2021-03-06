import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from 'src/services/auth.guard';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleAffectComponent} from './article-affect/article-affect.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {EventsComponent} from './events/events.component';
import {ProfilComponent} from './profil/profil.component';
import {EventFormComponent} from './event-form/event-form.component';
import {ToolsAffectComponent} from './tools-affect/tools-affect.component';
import {ToolsComponent} from './tools/tools.component';
import {AddToolsComponent} from './add-tools/add-tools.component';
import {ErrorComponent} from './error/error.component';

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
      }
    ]
  },
  {
    path: 'articles',
    canActivate: [AuthGuard],
    children: [
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
    path: 'events',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EventsComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: EventFormComponent,
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: EventFormComponent
      },

    ]
  },

  {
    path: 'profil',
    pathMatch: 'full',
    component: ProfilComponent,
  },

  {
    path: 'tools',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ToolsComponent,
      },
      {
        path: ':id/affect',
        pathMatch: 'full',
        component: ToolsAffectComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: AddToolsComponent
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: AddToolsComponent
      },
    ]
  },

  {
    path: '**',
    component: ErrorComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
