import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth, User, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {}
  async logout() {
    await this.authService.logout();
  }
}
