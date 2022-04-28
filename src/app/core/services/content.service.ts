import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IGame } from '../../shared/interfaces';


const API_URL = environment.apiURL;

@Injectable()
export class ContentService {
  game: IGame | null | undefined;

  constructor(private http: HttpClient) { }

  createGame(data: {
    name: string,
    description: string,
    imageUrl: string,
    _ownerId: string,
    likes: string[]
  }) {
    return this.http.post<IGame>(`${API_URL}/jsonstore/games`, data, { withCredentials: false })
  }

  getAllGames() {
    return this.http.get<IGame[]>(`${API_URL}/jsonstore/games`, { withCredentials: false })
  }

  getGameById(id: string) {
    return this.http.get<IGame>(`${API_URL}/jsonstore/games/${id}`)
  }

  editGameById(id: string, ownerId: string, likeees: string[], data: any) {

    data._id = id
    data._ownerId = ownerId;
    data.likes = likeees;

    console.log(data, '-----dataaa')
    return this.http.put<IGame>(`${API_URL}/jsonstore/games/${id}`, data, { withCredentials: false })
  }

  delGameById(id: string) {
    return this.http.delete<IGame>(`${API_URL}/jsonstore/games/${id}`)
  }


  likeGameById(data: any, id: string,) {

    return this.http.put<IGame>(`${API_URL}/jsonstore/games/${id}`, data, { withCredentials: false })
  }


  getMyPosts(ownerId: string) {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return this.http.get<IGame[]>(`${API_URL}/jsonstore/games?where=${query}`, { withCredentials: false });

  }
}
