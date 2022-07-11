import { Component, OnInit } from '@angular/core';
import { Command } from 'src/models/command';
import { HttpClientServiceService } from 'src/service/http-client-service.service';
import { UrlApi } from 'src/service/url-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);

  constructor(
    private httpClient: HttpClientServiceService
  ) { }

  ngOnInit(): void {
        this.httpClient.getRequest(UrlApi.commandRecurrence).subscribe((json) => {
      console.log(json);
    });
  }

  updateDatas(urlEventClickSidebar: string): void {
    this.httpClient.getRequest(urlEventClickSidebar).subscribe((json) => {
      console.log(json);
    });
  }
}
