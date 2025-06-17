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
import { MatDialog } from '@angular/material/dialog';
import { ViewComponetComponent } from '../shared/components/view-componet/view-componet.component';
import { RestoDetailsComponent } from "../components/resto-details/resto-details.component";
import {MatTabsModule} from '@angular/material/tabs';
import { DonarDetailsComponent } from "../components/donar-details/donar-details.component";
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
    NgxSkeletonLoaderModule,
    RestoDetailsComponent,
    MatTabsModule,
    DonarDetailsComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  
  constructor(
    private restFeeds: RestFeedsDetailsService,
    private snackBar:MatSnackBar,
    private dialogRef:MatDialog
  
  ) { }
  
  ngOnInit(): void {
     this.getRestDetails();
  }

  private subscriptions$ = new Subscription();

  restDetails: any[] = [];

  isLoad:boolean = false;

  permission: boolean = false;

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
          this.restDetails = RESTOS_AVAILABLE.data;
          this.permission = RESTOS_AVAILABLE.permission;
          console.log(this.permission);
          this.snackBar.open('there are not any restaurant available',
            'close', {duration:3000}
          )
        },
      })
    );
  }

  onViewClickBtn(){
    const dialogRef = this.dialogRef.open(ViewComponetComponent, {
      width:'300px',
      height:'200px',
      data:{
        title:'hello from gk'
      }
    })
    delay(2000);
  }

  ngOnDestroy(){
    this.subscriptions$.unsubscribe();
  }
}
