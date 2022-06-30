import{Component} from '@angular/core'


@Component({
// selector:'[app-server]',
selector:'.app-server',
templateUrl:'./server.component.html',
styleUrls:['./server.component.css']

})
export class ServerComponent{
server = 'Servers'
serverId:number =10;
serverStatus: string = 'offline';

getServerStatus(){
  return this.serverStatus

}
}
