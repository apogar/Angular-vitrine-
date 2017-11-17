import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ApicallService {

  private api = 'http://localhost:8000/';
  private nameUrl ='';
  data: any = {};
  
  constructor(private http: Http) {

  }
  
  getData(){	
    this.nameUrl = this.api+'name';
	return this.http.get(this.nameUrl).map((res: Response) => res.json());
  };
  
   getDateplus(date){	
    this.nameUrl = this.api+'dateplus/'+date;
	return this.http.get(this.nameUrl).map((res: Response) => res.json());
  };  
  getDatemoins(date){	
    this.nameUrl = this.api+'datemoins/'+date;
	return this.http.get(this.nameUrl).map((res: Response) => res.json());
  };
  
  getContacts(){
	  this.getData().subscribe(mm => {		
		console.log('getdata   :');
		console.log(mm);
		this.data = mm;
	  return this.data;
	  });
  };
  
  getRdv(day){	
    this.nameUrl = this.api+'rdv/'+day;
	return this.http.get(this.nameUrl).map((res: Response) => res.json()); 
  };
  
  getDate(){
	  const url = this.api+'calendar';
	  console.log(url);
	  return this.http.get(url).map((res) => res.json());
  }

}
