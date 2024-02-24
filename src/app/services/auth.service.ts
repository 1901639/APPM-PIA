import { Injectable, inject } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  authState,
  User,
  signOut,
  onAuthStateChanged,
  user,
} from '@angular/fire/auth';
import { User as UserInterface } from '../interfaces/user';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState$: Observable<User | null> = authState(this.auth);
  private userState: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.userState.next(user)
    })
  }

  public async login({ email, password }: UserInterface) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  public async register({ email, password }: UserInterface) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  public async logout() {
    await signOut(this.auth);
  }

  public userInfo(){
    return this.userState
  }
}
