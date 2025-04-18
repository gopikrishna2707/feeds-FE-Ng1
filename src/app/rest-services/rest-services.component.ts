import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-rest-services',
  standalone: true,
  imports: [],
  templateUrl: './rest-services.component.html',
  styleUrl: './rest-services.component.scss'
})
export class RestServicesComponent {

  constructor(private http: HttpClient) { }

}
