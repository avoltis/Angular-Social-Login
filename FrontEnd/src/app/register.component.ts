import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register',
  template: `
        <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>Register New User</h4>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form>
               <mat-form-field>
                   <input matInput placeholder="email" type="email">
               </mat-form-field>
               <mat-form-field>
                    <input matInput placeholder="password" type="password">
               </mat-form-field>
               <button mat-raised-button color="primary">Register</button>
         </form>
        </mat-card-content>
        </mat-card>
  `
})

export class RegisterComponent {

}