import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel/user';
import { BorrowerService } from 'src/app/services/BorrowerService/borrower.service';

@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.scss'],
})
export class AddBorrowerComponent {
  user = new User();
  msg = '';
  errormsg = '';
  constructor(
    private borrowerService: BorrowerService,
    private _router: Router
  ) {}

  ngOnInit() {}

  addBorrower(AddBorrowerForm: any) {
    console.log(AddBorrowerForm.role);
    this.borrowerService.addBorrowerFromRemote(this.user).subscribe(
      (data) => {
        console.log('Responce recived' + this.user.userID);
        this.errormsg = '';
        this.msg = 'Borrower Added Successful';
        AddBorrowerForm.reset();
      },
      (error) => {
        console.log('Exception occured');
        this.msg = '';
        this.errormsg = 'Borrower Already Exists';
      }
    );
  }
}
