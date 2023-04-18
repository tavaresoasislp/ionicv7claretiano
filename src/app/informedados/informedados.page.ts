import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-informedados',
  templateUrl: './informedados.page.html',
  styleUrls: ['./informedados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InformedadosPage implements OnInit {
  handlerMessage ='';
  roleMessage='';
  nomeUsuario='';
  emailUsuario='';
  numeroTelUsuario='';
  public enviarDados = [
    {
    text: 'Cancelar',
    role:'cancel',
    handler: (data: { nomeUsuario: string; emailUsuario: string; numeroTelUsuario: string; }) => {
      this.handlerMessage ='Você cancelou o envio dos dados!';
      this.nomeUsuario = '';
      this.emailUsuario ='';
      this.numeroTelUsuario ='';
    }
  },
  {
    text: 'Enviar',
    role:'confirm',
    handler: (data: { nomeUsuario: string; emailUsuario: string; numeroTelUsuario: string;}) => {
      this.nomeUsuario = 'Seu nome: ' + data.nomeUsuario;
      this.emailUsuario ='Seu email: ' + data.emailUsuario;
      this.numeroTelUsuario ='Seu número de telefone: ' + data.numeroTelUsuario;
      this.handlerMessage = 'Você enviou os dados com sucesso!';}
  }
  ];
  public alertInputs = [
    {
      name: 'nomeUsuario',
      placeholder: 'Nome',
    },
    {
      name: 'emailUsuario',
      type: 'email',
      placeholder: 'Email',
    },
    {
      name: 'numeroTelUsuario',
      type: 'textarea',
      placeholder: 'Número de Telefone',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
