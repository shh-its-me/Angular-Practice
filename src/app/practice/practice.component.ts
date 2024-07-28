import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  // template: `<h1>This is my practice component.</h1>
  // <p>This my practice para.</p>`,
  styleUrls: ['./practice.component.css']
  // styles:[`
  //   h1{color: red; margin:200px}
  //   p{color: green; margin:300px}
  //   `]

})
export class PracticeComponent implements OnInit {
  num: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClickIncrement() {
    this.num++;
  }

  onClickReset(){
    this.num = 0
  }
}
