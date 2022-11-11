import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styles: [
    `
      p {
        color: #18a558;
        font-size: 26px;
        font-weight: bold;
      }
    `,
  ],
})
export class SuccessalertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
