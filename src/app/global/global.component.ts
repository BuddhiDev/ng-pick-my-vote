import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  
  
  public static api_origin: string = "https://pickmyvote.herokuapp.com/";

  constructor() { }

  ngOnInit(): void {
  }

}
