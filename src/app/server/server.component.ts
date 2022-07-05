import{Component} from '@angular/core'


@Component({
// selector:'[app-server]',
selector:'.app-server',
templateUrl:'./server.component.html',
// styleUrls:['./server.component.css']
styles:[`.online{
  color:white
}`]

})
export class ServerComponent{
server = 'Servers'
serverId:number =10;
serverStatus: string = 'offline';
serverFor=['r','y','t']

constructor(){
  this.serverStatus=Math.random()>0.5 ? 'online':'offline'
}

getServerStatus(){
  return this.serverStatus

}

getColor(){
  return this.serverStatus==='online'?  'green':'red'
}
}
