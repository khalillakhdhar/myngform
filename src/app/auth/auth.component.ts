import { Component } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  user={} as User;

}
