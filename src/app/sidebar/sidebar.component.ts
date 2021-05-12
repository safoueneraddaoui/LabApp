import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/services/AuthService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isLoggedIn: boolean;
  user: any;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.authService.userClaims$.subscribe(user => {
      this.user = !!user ? user : null;
      this.isLoggedIn = !!user;
    });
  }

  logout(): void {
    this.authService.doLogout().finally(() => {
      this.router.navigate(['/login']);
    });
  }

  private _getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }
}
