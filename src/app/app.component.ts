import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { NgIf } from '@angular/common';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [AppComponent]	
})


export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit() {

	//dropdown init
	$('.ui.dropdown').dropdown();
    // navbar init active
    $('.ui .item').on('click', function() {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
    });
    //accordion init
    $('.ui.accordion').accordion();
    //tab init
    $('.menu .item').tab();
	//sticky init
	$('.ui.sticky').sticky();
  }
  
  

}