import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel/user';
import { RegisterService } from 'src/app/services/registerService/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = new User();
  msg = '';
  constructor(
    private registerService: RegisterService,
    private _router: Router
  ) {}

  ngOnInit() {
  }

  registerUser(RegistrationForm: any) {
    console.log(RegistrationForm.role);
    // this.user.role = this.selectedRole;
    this.registerService.registraterUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('Responce recived' + this.user.userID);
        this.msg = 'Registration Successful';
      },
      (error) => {
        console.log('Exception occured');
        // this.msg=error.msg;
        this.msg = 'User Already Exists';
      }
    );
  }
}
