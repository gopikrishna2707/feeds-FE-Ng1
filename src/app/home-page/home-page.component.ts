import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RestFeedsDetailsService } from '../services/rest-feeds-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatMenuModule,
    MatSidenavModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(
    private restFeeds: RestFeedsDetailsService,
    private snackbar:MatSnackBar
  
  ) { }
  
  ngOnInit(): void {
    this.getRestDetails();
  }

  private subscriptions$ = new Subscription();

  restDetails: any[] = [];

  getRestDetails(): void {
    this.subscriptions$.add(
      this.restFeeds.getRestDetails().subscribe({
        next: (response) => {
          this.restDetails = response;
        },
        error: (error) => {
          console.log(error);
          this.snackbar.open('there are any restaurant available',
            'close', {duration:3000}
          )
        },
      })
    );
  }

  unSubscribeAll(){
    this.subscriptions$.unsubscribe();
  }
}
