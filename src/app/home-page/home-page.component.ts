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
import { delay, Subscription } from 'rxjs';
import { RestFeedsDetailsService } from '../services/rest-feeds-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RESTOS_AVAILABLE } from '../mockData';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

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
    NgxSkeletonLoaderModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(
    private restFeeds: RestFeedsDetailsService,
    private snackBar:MatSnackBar
  
  ) { }
  
  ngOnInit(): void {
     this.getRestDetails();
  }

  private subscriptions$ = new Subscription();

  restDetails: any[] = [];

  isLoad:boolean = false;

  getRestDetails(): void {
    this.subscriptions$.add(
      this.restFeeds.getRestDetails().subscribe({
        next: (response) => {
          //this.restDetails = response;
           delay(5000);
        },
        error: (error) => {
          this.isLoad = true;
          console.log(error);
          delay(5000);
          this.restDetails = RESTOS_AVAILABLE
          this.snackBar.open('there are any restaurant available',
            'close', {duration:3000}
          )
        },
      })
    );
  }

  ngOnDestroy(){
    this.subscriptions$.unsubscribe();
  }
}
