import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { FirebaseModule } from "../firebase/Firebase.module";
import { MatFormFieldControl } from '@angular/material/form-field';



import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {ConfirmDialogComponent} from './@root/confirm-dialog/confirm-dialog.component';
import { LoginComponent } from './login/login.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAffectComponent } from './article-affect/article-affect.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArticleFormComponent } from './article-form/article-form.component';
import { EventsComponent } from './events/events.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfilComponent } from './profil/profil.component';
import { ToolsComponent } from './tools/tools.component';
//-------------------------------

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    MemberListComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LoginComponent,
    ArticleListComponent,
    ArticleAffectComponent,
    ArticleFormComponent,
    EventsComponent,
    EtudiantComponent,
    ProfilComponent,
    ToolsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatButtonModule,
        FlexModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatIconModule,
        MatDialogModule,
        FirebaseModule,
        MatButtonToggleModule,
        MatInputModule,
        FullCalendarModule

    ],
  exports:[
    MatDialogModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
