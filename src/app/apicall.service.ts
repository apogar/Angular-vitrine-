import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { RequestMethod } from '@angular/http';
import { Headers } from '@angular/http';
import { Request } from '@angular/http';




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
  
  getRdvAll(year,month){	
    this.nameUrl = this.api+'rdvAll/'+year+'/'+month;
	return this.http.get(this.nameUrl).map((res: Response) => res.json()); 
  };
  
  getDate(){
	  const url = this.api+'calendar';
	  return this.http.get(url).map((res) => res.json());
  }
  
  
  postRdv(data){
        var headers = new Headers(), authtoken = localStorage.getItem('authtoken');
        headers.append("Content-Type", 'application/json');

        if (authtoken) {
        headers.append("Authorization", 'Token ' + authtoken)
        }
        headers.append("Accept", 'application/json');
		
		var request = new RequestOptions({
            method: RequestMethod.Post,
			url:this.api+'rdv',
			headers: headers,
            body: JSON.stringify(data)
	  })
	  
	  return this.http.request(new Request(request)).map((res: Response) => {
		  if(res) {
			  return {status: res.status,json:res.json()}
		  }
		  });
  }

}
