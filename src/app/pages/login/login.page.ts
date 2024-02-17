import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.scss'
})
export class LoginPage implements OnInit {
  public email: string = '';
  public password: string = '';
  public user: User | null = null;
  public message: unknown = '';
  public isToastOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.router.navigate(['/'])
      } else {
        this.user = null;
      }
    });
  }

  async login() {
    this.isToastOpen = false
    try {
      await this.authService.login({
        email: this.email,
        password: this.password,
      });
      // Redirigir al usuario a home
      this.router.navigate(['/'])      
    } catch (error) {
      this.isToastOpen = true;
      this.message = 'Error de inicio de sesión, revise nuevamente sus credenciales';
    }
  }

  
}
