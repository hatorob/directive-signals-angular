import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {

  private fb = inject( FormBuilder );
  //constructor( private fb: FormBuilder ) {}
  public color:string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })


  public changeColor = (): void => {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
