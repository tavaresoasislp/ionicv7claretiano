import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/folder/loginusuario', icon: 'people' },
    { title: 'Boas Vindas', url: '/folder/boasvindas', icon: 'snow'},
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Informe Dados', url: '/folder/informedados', icon: 'information-circle' },
    { title: 'Bagdes', url: '/folder/badges', icon: 'cube' },
    
  ];
}
