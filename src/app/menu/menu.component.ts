import { Component, OnInit } from '@angular/core';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
	
	chiffre = 0;
	ancre = '#ancre'+this.chiffre;
	
	onClickPlus() {
		if ( this.chiffre != 5)
			this.chiffre += 1;
			this.ancre	= '#ancre'+this.chiffre;
		}
	onClickMoins() {
		if ( this.chiffre != 0)
			this.chiffre -= 1;
			this.ancre	= '#ancre'+this.chiffre;
	}

  constructor() { }

  ngOnInit() {
	  
	 //dropdown init
	$('.ui.dropdown').dropdown();
  }

}
