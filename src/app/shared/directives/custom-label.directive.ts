import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = "red";
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color( value: string ) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log(value);
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    console.log(el);
    this.htmlElement = el;
    //this.htmlElement.nativeElement.innerHTML = "Hola Mundo!";
  }

  ngOnInit(): void {
    console.log("Directiva - NgOnInit");
  }

  setStyle(): void {

    if( !this.htmlElement ) return;
    this.htmlElement.nativeElement.style.color = this._color;

  }

  setErrorMessage(): void {

    if( !this.htmlElement || this.htmlElement === undefined ) return;
    if( !this._errors ) {
      this.htmlElement.nativeElement.innerText = "No hay errores"
      return;
    }

    //!Obtener los errores
    const errors = Object.keys(this._errors);
    console.log(errors);

    if( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = "Este campo es requerido"
      return;
    }
    if( errors.includes('minlength') ) {
      console.log(this._errors['minlength']);
      this.htmlElement.nativeElement.innerText = `Debe contener al menos ${this._errors['minlength']['requiredLength']} caracteres`
      return;
    }
    if( errors.includes('email') ) {
      this.htmlElement.nativeElement.innerText = "Debe tener un email valido"
      return;
    }


  }

}
