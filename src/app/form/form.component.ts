import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  HCN={
    dai:null,
    rong:null ,
    chuvi:null,
    dientich:null
  }
  constructor() { }

  ngOnInit() {
  }
  chieurong:any;
  Tinh()
  {
    let chieudai=parseInt(this.HCN.dai);
    this.chieurong=parseInt(this.HCN.rong);
    this.HCN.chuvi=(chieudai+this.chieurong)*2;
    this.HCN.dientich=this.HCN.dai*this.HCN.rong;
  }
}
