import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { IGame } from '../../shared/interfaces';


const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor( private http: HttpClient ) { }

  createGame(data:any){
    return this.http.post<IGame>(`${API_URL}/jsonstore/games`,data,{withCredentials:false})
  }

  getAllGames(){
    return this.http.get<IGame[]>(`${API_URL}/jsonstore/games`,{withCredentials:false})
  }

  getGameById(id:string){
    return this.http.get<IGame>(`${API_URL}/jsonstore/games/${id}`)
  }


}
