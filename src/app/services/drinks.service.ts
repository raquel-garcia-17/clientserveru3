import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListDrink } from '../interfaces/drinksAPI';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  url:string = "https://app-neryzach.herokuapp.com/"; //change it

  constructor(private http:HttpClient) { }

  getAllDrinks(page:number):Observable<ListDrink[]>{
    let direccion = this.url + "drinks?page=" + page;
    return this.http.get<ListDrink[]>(direccion);

  }
  
  getSingleDrink(id):Observable<ListDrink>
  {
    let direccion = this.url + "drinks/" + id;
    return this.http.get<ListDrink>(direccion);
  }

  putDrink(form:ListDrink):Observable<Response>
  {
    let direccion = this.url + "drinks/";
    return this.http.put<Response>(direccion, form);
  }

  postDrink(form:ListDrink):Observable<Response>{
    let direccion = this.url + "drinks/";
    return this.http.post<Response>(direccion, form);
  }
}