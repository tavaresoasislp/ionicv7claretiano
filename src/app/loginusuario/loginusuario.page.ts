import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginusuario',
  templateUrl: './loginusuario.page.html',
  styleUrls: ['./loginusuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginusuarioPage implements OnInit {
  username: string = '';
  password!: string;
  errorMessage!: string;

  constructor(private navController: NavController) {}

  ngOnInit() {
  }
  login() {
    // Validate the username and password
  if (this.username === 'user' && this.password === 'password') {
    // Redirect the user to the welcome page
    this.navController.navigateForward('/boasvindas');
  } else {
    // Show an error message
    this.errorMessage = 'Invalid username or password';
  }
  }
}
