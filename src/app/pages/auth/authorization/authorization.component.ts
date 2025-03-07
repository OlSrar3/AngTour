import { Component, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnInit {
  login: string = null;
  password: string;

constructor(private userService:UserService){

}
ngOnInit(): void {

}
onCheck(ev:Event): void {
console.log('ev', ev);


}
}




