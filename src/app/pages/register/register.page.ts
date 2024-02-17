import { Component, OnInit } from '@angular/core';
import {User} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.scss'],
})
export class RegisterPage {
  public email: string = '';
  public password: string = '';
  public user: User | null = null;
  public message: unknown = '';
  public isToastOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    //registrar usuarios
    try {
      await this.authService.register({
        email: this.email,
        password: this.password,
      });

      this.router.navigate(['/'])
    } catch (error) {
      console.log(error);
      
      this.isToastOpen = true
      // TODO crear diccionario de errores para ser más especificos
      this.message = 'Error al registrar usuario' 
    }
  }

}
