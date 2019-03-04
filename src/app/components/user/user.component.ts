import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

import { UserModel } from '../../models/user.model';
 
@Component({
  selector: 'user-component',
  templateUrl:'./user.component.html'
})
export class UserComponent {
    users:UserModel[] = [];
    constructor(public dataService: DataService,
                public apiService: ApiService,
                private router: Router,){
    
    }

    ngOnInit(){
        this.apiService.getUsers().subscribe((res)=>{     
            this.users = res;            
        },
        error =>{
            console.log(error);
        });
    }

    onSelectUser(user:UserModel){
        this.dataService.selectedUser = user;
        this.router.navigate(['/albums']);
    }
}