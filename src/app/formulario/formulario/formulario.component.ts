import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  form!:FormGroup;
  status = false;

  constructor(private fb: FormBuilder){

  }

  ngOnInit():void{
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required, Validators.email],
      phone: ['',Validators.required],
      subjet:['',Validators.required],
      messaje:['',Validators.required]
    });
  }
  enviar(){
    this.status = true;
  }
}
