import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  public user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
        this.router.navigate(['/login']);
      }
    });
  }

  async logout() {
    await this.authService.logout();
  }
}
