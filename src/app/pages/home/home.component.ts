import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserResult } from 'src/app/interfaces/usersAPI';
import { FoodResult } from 'src/app/interfaces/foodsAPI';
import { DrinksService } from 'src/app/services/drinks.service';
import { UsersService } from 'src/app/services/users.service';
import { FoodsService } from 'src/app/services/foods.service';
import { Router } from '@angular/router';
import { ListDrink } from 'src/app/interfaces/drinksAPI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*constructor(private service: UsersService) { }
  users: UserResult;
  ngOnInit(): void {
    this.service.getUsers().subscribe((result:UserResult)=>{
      this.users = result;
      console.log(result);
    });
  }*/

  /*constructor(private service: FoodsService) { }
  Foods: FoodResult;
  ngOnInit(): void {
    this.service.getFoods().subscribe((result:FoodResult)=>{
      this.foods = result;
      console.log(result);
    });
  }*/
  drinks:ListDrink[];

  constructor(private api:DrinksService, private router:Router){}
  ngOnInit(): void{
    this.api.getAllDrinks(1).subscribe(data => {
      this.drinks = data;
    })
  }

  editDrink(id){
    this.router.navigate(['contact', id]);
  }

  newDrink(){
    this.router.navigate(['login']);
  }
}
