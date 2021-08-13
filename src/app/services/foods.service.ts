import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodResult} from '../interfaces/foodsAPI';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http: HttpClient) {
    //this.getUsers().subscribe((result:UserResult)=>{
    //  console.log(result.data);
    //});
   }

   getVinyls(){
    return this.http.get<FoodResult>("https://app-neryzach.herokuapp.com/vinyls?page1"); //change it too
  }
}