import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

import { AlbumModel } from '../../models/album.model';

import * as _ from "lodash";
 
@Component({
  selector: 'album-component',
  templateUrl:'./album.component.html'
})
export class AlbumComponent {
    albums:AlbumModel[] = [];
    constructor(public dataService: DataService,
                public apiService: ApiService,
                private router: Router,){
    
    }

    ngOnInit(){
        this.apiService.getAlbums().subscribe((res : AlbumModel[])=>{
            if(this.dataService.selectedUser){
                this.albums = _.filter(res, {'userId': this.dataService.selectedUser.id});
                console.log(this.albums);  
            }
            else{
                this.albums = [];
            }             
        },
        error =>{
            console.log(error);
        });
    }

    onSelectAlbum(album:AlbumModel){
        this.dataService.selectedAlbum = album;
        this.router.navigate(['/photos']);
    }

    usersView(){
        this.router.navigate(['/users']);
    }
}