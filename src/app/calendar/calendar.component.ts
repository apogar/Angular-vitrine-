import { Component, OnInit } from '@angular/core';
import { ApicallService } from './../apicall.service';

declare let jquery: any;
declare let $: any;



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ApicallService]

})
export class CalendarComponent implements OnInit {

  constructor(private ApicallService: ApicallService) { }
  
  datedd = [];
  
  getd(): void {
  this.ApicallService.getDate().subscribe(dd => {
	  this.datedd = dd;
	} 
  }

  ngOnInit() {	  
  this.getd();
  }



}
