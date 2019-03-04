import { Injectable } from '@angular/core';
import { UserModel  } from '../models/user.model';
import { AlbumModel } from '../models/album.model';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    public selectedUser : UserModel = null ;
    public selectedAlbum : AlbumModel = null ;
}