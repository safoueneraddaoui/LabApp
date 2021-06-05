import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
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
