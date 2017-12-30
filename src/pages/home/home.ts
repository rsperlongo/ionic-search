import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string

  constructor(public navCtrl: NavController, public rest: RestApiProvider) {}

  getCountries() {
    this.rest.getCountries()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }

  ionViewDidLoad(){
    this.getCountries()
  }

}
