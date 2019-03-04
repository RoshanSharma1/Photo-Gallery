import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

import { PhotoModel } from '../../models/photo.model';


import * as _ from "lodash";

@Component({
  selector: 'photo-component',
  templateUrl:'./photo.component.html'
})
export class PhotoComponent {
    photos:PhotoModel[] = [];
    constructor(public dataService: DataService,
                public apiService: ApiService,
                private router: Router,){
    
    }

    ngOnInit(){
        this.apiService.getPhotos().subscribe((res)=>{     
            if(this.dataService.selectedAlbum){
                this.photos = _.filter(res, ['albumId', this.dataService.selectedAlbum.id]);
                this.photos = this.photos.slice(0,5);  
            }
            else{
                this.photos = [];
            }            
        },
        error =>{
            console.log(error);
        });
    }

    albumsView(){
        this.router.navigate(['/albums']);
    }
}