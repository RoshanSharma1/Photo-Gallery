import { BaseModel } from './base.model';

export class PhotoModel extends BaseModel {
    albumId:number;
    url:string;
    thumbnailUrl:string;
    title:string;

}