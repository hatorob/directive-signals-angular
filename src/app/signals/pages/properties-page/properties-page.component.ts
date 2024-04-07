import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request,interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  onFieldUpdate( field: keyof User, value: string ) {
    console.log(field,value);
    //! una forma de conmutarlo
    /* this.user.set({
      ...this.user(),
      [field]: value
    }) */

    //! Otra forma
    /* this.user.update( (current) => ({
      ...this.user(),
      [field]: value
    })) */

    //! Otra forma
    this.user.update( current => {
      switch( field ) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        default:
          return current;
      }
      return current;
    })


  }



}
