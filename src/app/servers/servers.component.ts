import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<h1>Heading1</h1>
  <h2>Heading2</h2>
  <h3>Heading3</h3>
  <h4>Heading4</h4>
  <h5>Heading5</h5>
  <h6>Heading6</h6>
 `,
  styleUrls: ['./servers.component.css']
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
