import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  apiURL: string = 'http://localhost:8084/instruments/api/all';


  instruments! : Instrument[]; //un tableau de produits
  //categories : Categorie[];


  constructor(private http : HttpClient) {

  }

  listeInstrument(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(this.apiURL);
    }





}
