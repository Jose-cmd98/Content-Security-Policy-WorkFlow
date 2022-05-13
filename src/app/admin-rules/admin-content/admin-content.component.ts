import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {

  public isShown: boolean = false; //hidden by default

  constructor() { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.isShown = !this.isShown;
  }

}
