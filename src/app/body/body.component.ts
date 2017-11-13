import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
	
  value = '';
  click = '';
  i= 0;
  IMG = null;
  
  onEnter(value: string) {
	  if(value == ''){
		  this.value = '';
	  }
	  else
		this.value = 'https://'+value; 
  }
  
    onClickMe() {
		if (this.i == 0){
			this.click = 'Test Click function';
			this.i = 1;
		}else{
			this.click = '';
			this.i = 0;
		}
	}
			

  constructor() { }

  ngOnInit() {
	  
	//modal init
	$('.ui #settingbutton').on('click', function() {$('.ui.basic.modal').modal('show');});
	//sticky init
	$('.ui.sticky').sticky({
    contexte: '#example1'});
  
	this.IMG = ['../../assets/img/nan.jpg'];
	
  }

}
