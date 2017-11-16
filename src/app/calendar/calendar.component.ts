import { Component, OnInit } from '@angular/core';
import { ApicallService } from './../apicall.service';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';


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
  tp = [];
  sem = [];
  jour = [];
  temp = Array;
  math = Math;
  
  getd(): void {
  this.ApicallService.getDate().subscribe(dd => {
		this.datedd = dd;
		this.tp = Object.values(dd.arr);
		for(let i = 0; i < 30; i++){
			this.jour[i] = this.tp[i].i;
			this.sem[i] = this.tp[i].j;
		}
	});
  }

  ngOnInit() {	  
	this.getd();

  }
  

  
}
