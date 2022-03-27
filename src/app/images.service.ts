import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  constructor(private http:HttpClient) { }

  loadImage(){

   const url ='https://images.pexels.com/photos/5861325/pexels-photo-5861325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    return this.http.get(url, { responseType: 'blob' });
  }


}
