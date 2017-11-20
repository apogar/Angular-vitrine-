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
	
  public donnee: Rdv;
  
  datedd = [];
  dateMonth = [];
  tp = [];
  sem = [];
  jour = [];
  temp = Array;
  math = Math;
  day 	= 0;
  dayModal 	= 0;
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
				this.ApicallService.getRdvAll(this.year,this.month).subscribe(data => {
					console.log('data:');
					console.log(data);
					this.dateMonth = data;
			});
				resolve();
			});

	  });
	  return promise;
  }
  
  modal(d){
	console.log(d);
	this.dayModal = d;
	$('.ui .table #'+d+this.month+this.year)
	.on('click', function() {$('.ui.basic.modal').modal('show');});
	this.ApicallService.getRdv(this.year+'-'+this.month+'-'+d).subscribe(data => {
		this.rdv = data;
		console.log(data);
	});
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

  onSubmit(form: any): void {
	this.donnee = new Rdv();
	this.donnee.first = form.first;
	this.donnee.last = form.last;
	this.donnee.date = this.year+'-'+this.month+'-'+this.dayModal;
    console.log(this.donnee);
	this.ApicallService.postRdv(this.donnee).subscribe(data => {
		console.log(data);
	});
  }

  ngOnInit() {	  
	
  }
  
}


class Rdv{
	first: string;
	last: string;
	date: string;
 }
