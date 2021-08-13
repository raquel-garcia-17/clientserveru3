import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinksService } from 'src/app/services/drinks.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { ListDrink } from 'src/app/interfaces/drinksAPI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    avatar: new FormControl('')
  });


  constructor(private router:Router, private api:DrinksService) { }

  ngOnInit(): void {
  }

  postForm(form:ListDrink){   
    this.api.postDrink(form).subscribe(data =>{
  console.log(data);
 })
}
}
