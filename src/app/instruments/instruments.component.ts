import { Instrument } from './../model/instrument.model';
import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments! : Instrument[];

     constructor(private instrumentService:InstrumentService ) {

      }


      ngOnInit(): void {

        this.chargerInstruments();
      }

      chargerInstruments(){
        this.instrumentService.listeInstrument().subscribe(instrs => {
          console.log(instrs);
          this.instruments = instrs;
          });
      }





}
