import { Component, effect, signal, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user-request,interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit, OnDestroy {


  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  ngOnInit(): void {
    //! Para demostrar que el effect tiene una limpieza automatica
    /* setInterval( () => {
      this.counter.update( current => current + 1);
    },1000) */
  }

  ngOnDestroy(): void {
    //this.userChangeEffect.destroy();
  }

  public userChangeEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy( value: number ) {
    this.counter.update( current => current + value);
  }

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
      return {...current};
    })


  };



}
