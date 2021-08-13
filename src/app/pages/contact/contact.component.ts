import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDrink } from 'src/app/interfaces/drinksAPI';
import { DrinksService } from 'src/app/services/drinks.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:DrinksService) { }

  dataDrink:ListDrink;
  editForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    avatar: new FormControl('')
  });

  ngOnInit(): void {
    let idDrink = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleDrink(idDrink).subscribe(data =>{
      this.dataDrink = data[0];
      this.editForm.setValue({
        'name' : this.dataDrink.name,
        'price' : this.dataDrink.price,
        'type' : this.dataDrink.type,
        'avatar' : this.dataDrink.avatar

      });
    }) 
  }

  postForm(form:ListDrink){
    this.api.putDrink(form).subscribe(data  =>{
      console.log(data);

    })
  }
}
