import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  
  billingForm :FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
    this.billingForm = this.formBuilder.group({
      membership:['',Validators.required]
    })
  }

  onSubmit(){
    console.log('');
  }

}
