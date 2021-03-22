import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  pessoaForm: FormGroup;

  sexoList: string[] = ['Feminino', 'Masculino'];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: [null, [Validators.required, Validators.pattern('[0-9]{3}')]],
      sexo: [this.sexoList[0], Validators.required],
      peso: [null, [Validators.required, Validators.pattern('[0-9]{3}\,[0-9]{2}')]],
      altura: [null, [Validators.pattern('[0-9]\,[0-9]{2}')]],
    })
  }

  getErrorMessageIdade() {
    let required = this.getErrorRequired(this.pessoaForm.controls.idade);
    if (required != null) {
      return required;
    }
    if (this.pessoaForm.controls.idade.hasError('pattern')) {
      return 'Campo deve ser um número referente à idade';
    }
  }

  getErrorMessagePeso() {
    let required = this.getErrorRequired(this.pessoaForm.controls.peso);
    if (required != null) {
      return required;
    }
    if (this.pessoaForm.controls.peso.hasError('pattern')) {
      return 'Campo deve ser um número referente ao peso';
    }
  }

  getErrorMessageAltura() {
    if (this.pessoaForm.controls.altura.hasError('pattern')) {
      return 'Campo deve ser um número referente à altura';
    }
  }

  getErrorRequired(control: AbstractControl) {
    if (control.hasError('required')) {
      return 'Campo obrigatório';
    }
  }

}
