
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatDialog } from '@angular/material/dialog';
import { RestFeedsDetailsService } from '../../services/rest-feeds-details.service';
import { RESTOS_AVAILABLE } from '../../mockData';
import { ViewComponetComponent } from '../../shared/components/view-componet/view-componet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-resto-details',
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
    MatFormFieldModule, MatInputModule
  ],
  templateUrl: './resto-details.component.html',
  styleUrl: './resto-details.component.scss'
})
export class RestoDetailsComponent {

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
