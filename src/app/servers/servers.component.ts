import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',

styleUrls: ['./servers.component.css']
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer=false
 serverCreationStatus ='No server was created'
 serverName ='Testserver';


  userName='abhishek'
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){

    this.serverCreationStatus='Server was created !Name is ' + this.serverName
    this.userName=''
  }

onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
// this.userName=(<HTMLInputElement>event.target).value;
}


}
