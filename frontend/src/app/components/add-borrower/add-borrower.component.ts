import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel/user';
import { AddBorrowerService } from 'src/app/services/addBorrowerService/add-borrower.service';
import { RegisterService } from 'src/app/services/registerService/register.service';

@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.scss'],
})
export class AddBorrowerComponent {
  user = new User();
  msg = '';
  constructor(
    private addBorrowerService: AddBorrowerService,
    private _router: Router
  ) {}

  ngOnInit() {}

  addBorrower(AddBorrowerForm: any) {
    console.log(AddBorrowerForm.role);
    this.addBorrowerService.addBorrowerFromRemote(this.user).subscribe(
      (data) => {
        console.log('Responce recived' + this.user.userID);
        this.msg = 'Borrower Added Successful';
      },
      (error) => {
        console.log('Exception occured');
        this.msg = 'Borrower Already Exists';
      }
    );
  }
}
