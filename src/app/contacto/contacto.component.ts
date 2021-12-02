import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formulario:FormGroup;
  enviado:boolean = false;

  constructor(public form:FormBuilder) {
    this.formulario = this.form.group({
      nombre:['',[Validators.required,Validators.maxLength(100)]],
      telefono:['',[Validators.required,Validators.maxLength(9),Validators.pattern("^[0-9]*$")]],
      email:['',[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      destinatario:['',Validators.required],
      mensaje:['',[Validators.required,Validators.maxLength(500)]]
    });
   }

  ngOnInit(): void {
    //volver al inicio al cargar
    window.scroll(0,0);
  }

  enviarDatos(){
    //guardar los datos
    //mostrar
    console.log(this.formulario.value);
    //limpiar el formulario
    this.formulario.reset();
    //mostrar mensaje
    this.enviado = true;
    window.scroll(0,0);
  }

} 
