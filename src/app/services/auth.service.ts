import { Injectable, inject } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  authState,
  User,
  signOut,
} from '@angular/fire/auth';
import { User as UserInterface } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  authState: Observable<User | null> = authState(this.auth);

  public async login({ email, password }: UserInterface) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  public async register({ email, password }: UserInterface) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  public async logout(){
    await signOut(this.auth)
  }

}
