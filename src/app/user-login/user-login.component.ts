import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { Subscription, throwError } from 'rxjs';
import { RestFeedsDetailsService } from '../services/rest-feeds-details.service';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgOptimizedImage,
    MatGridListModule,
    CommonModule,
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {

  private subscriptions$ = new Subscription();
  
  showExtraFields = true;
  isPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder,
    private restFeeds: RestFeedsDetailsService
  ) { }

  signInForm = new FormGroup({
    email: new FormControl('', Validators.email),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl('', Validators.required)
  });

  toggleFields() {
    this.showExtraFields = !this.showExtraFields;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    const email = this.signInForm.controls.email;
    const password = this.signInForm.controls.password;
  }

  sendLoginDetails(email: string | null | undefined, password: string | null | undefined) {
    
    {
      if (!email || !password) { console.error('Email or password is missing'); return; }

      const credentials = { email, password }
      this.subscriptions$.add(
        this.restFeeds.sendLoginDetails(credentials).subscribe({
          next(value) {
            return value;
          },
          error(err) {
            console.log(err);
            return throwError(() => new Error('error'));
          },
        }
        )
      )
    }
  }
}
