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

  private apiUrl = 'http://localhost:8000/';
  private nameUrl ='';
  data: any = {};
  
  constructor(private http: Http) {

  }
  
  getData(){	
    this.nameUrl = this.apiUrl+'name';
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

}
