import { BaseModel } from './base.model';
import AddressModel from './address.model';
import CompanyModel from './company.model';

export class UserModel extends BaseModel{
  name:string;
  username:string;
  email:string;
  address:AddressModel;
  phone:string;
  website:string;
  company:CompanyModel;
}