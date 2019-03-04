import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../models/user.model';
import { AlbumModel } from '../models/album.model';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = ' https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getUsers() :Observable<UserModel[]>{
      return this.httpClient.get<UserModel[]>(`${this.baseURL}/users`);
  }

  getAlbums() :Observable<AlbumModel[]>{
    return this.httpClient.get<AlbumModel[]>(`${this.baseURL}/albums`);
  }

  getPhotos() :Observable<PhotoModel[]>{
    return this.httpClient.get<PhotoModel[]>(`${this.baseURL}/photos`);
  }
}