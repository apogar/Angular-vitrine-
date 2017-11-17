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
	
  datedd = [];
  tp = [];
  sem = [];
  jour = [];
  temp = Array;
  math = Math;
  day 	= 0;
  month = 0;
  year 	= 0;
  rdv 	= 0;
  
  constructor(private ApicallService: ApicallService) {
		this.getd();
  }
  
  getd() {
	  const promise = new Promise(resolve => {
		  this.ApicallService.getDate().subscribe(dd => {
				this.datedd = dd;
				this.tp = Object.values(dd.arr);
				for(let i = 0; i < this.tp.length; i++){
					this.jour[i] = this.tp[i].i;
					this.sem[i] = this.tp[i].j;
				}
				this.day 	= dd.day;
				this.month 	= dd.month;
				this.year	= dd.year;
				resolve();
			});
	  });
	  return promise;
  }
  
  modal(d){
	console.log(d);
	this.ApicallService.getRdv(d).subscribe(data => {
		this.rdv = data;
	});
	$('.ui .table #'+d+this.month+this.year)
	.on('click', function() {$('.ui.basic.modal').modal('show');});
  }
  
dateplus() {
	this.ApicallService.getDateplus(this.month+'-'+this.year).subscribe(dd => {
		this.datedd = dd;
		this.tp = Object.values(dd.arr);
		for(let i = 0; i < this.tp.length; i++){
			this.jour[i] = this.tp[i].i;
			this.sem[i] = this.tp[i].j;
		}				
		this.day 	= dd.day;
		this.month 	= dd.month;
		this.year	= dd.year;
	});
}

datemoins() {
	this.ApicallService.getDatemoins(this.month+'-'+this.year).subscribe(dd => {
		this.datedd = dd;
		this.tp = Object.values(dd.arr);
		for(let i = 0; i < this.tp.length; i++){
			this.jour[i] = this.tp[i].i;
			this.sem[i] = this.tp[i].j;
		}				
		this.day 	= dd.day;
		this.month 	= dd.month;
		this.year	= dd.year;
	});
}

  ngOnInit() {	  
	
  }
  
}
