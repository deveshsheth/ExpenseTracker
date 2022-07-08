import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    this.futureDateDisabled();

  }

  maxDate:any;

  futureDateDisabled(){
    var dtToday:any = new Date();

    var month:any = dtToday.getMonth() + 1;
    var day:any = dtToday.getDate();
    var year:any = dtToday.getFullYear();

    if (month < 10)
      month = '0' + month;
    if (day < 10)
      day = '0' + day;

    this.maxDate = year + '-' + month + '-' + day;
    
  }

}
