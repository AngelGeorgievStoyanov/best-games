import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
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
    return this.http.post<IUser>(`${apiURL}/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`${apiURL}/me`, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user = null)
    );
  }
}

