import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../../shared/interfaces/user';
import { tap } from 'rxjs/operators';

const apiURL = environment.apiURL

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  register(data: { username: string; email: string; tel: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/users/register`, data, {withCredentials: false }).pipe(
      tap((user) => this.user = user)
    );
  }

  login(data: { email: string; password: string }) {
    
    return this.http.post<IUser>(`${apiURL}/users/login`, data, { withCredentials: false }).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`${apiURL}/users/profile`).pipe(
      tap((user) => {
        this.user = user;
      })
    )
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/users/logout`, {}, { withCredentials: false }).pipe(
      tap(() => this.user = null)
    );
  }

  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<IUser>(`${apiURL}/users/profile`, data).pipe(
      tap((user) => this.user = user)
    );
  }
}

