import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SaintProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SaintProvider {
  santi: any;

  constructor(public http: Http) {
    this.santi = null;
    console.log('Hello SaintProvider Provider');
  }

  getSaints(){
    if(this.santi){
      return Promise.resolve(this.santi); //pattern Promise per gestire la ricezione asincrona
    }
    return new Promise(
      resolve=>
      this.http.get('http://santieicone.azurewebsites.net/saints')
      .map(res => res.json())
      .subscribe(data => {
        this.santi=data;
        resolve(this.santi);
      })
    )
  }

}
