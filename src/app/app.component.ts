import { Component,OnInit } from '@angular/core';
import { DigimonsServices } from './digimons/digimons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  digimons:any;

  constructor(public digimon:DigimonsServices){}

  ngOnInit()
  {
    this.digimon.getDigimons().subscribe
    (
      (r) => {this.digimons = r; console.log(r)},
      (e) => { console.error(e)}
    )
  }
}
