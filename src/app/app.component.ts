import { Component,OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { WebSocketAPI } from './web-sockets/web-sockets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'my-portofolio';

  webSocketAPI: WebSocketAPI;
  serverMessage: string;
  name: string;
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(this);
    this.serverMessage="hi user:";
  }

  connect(){
    this.serverMessage="connecting";
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.serverMessage="sending  messsage ";
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message){
  this.serverMessage = JSON.parse(message).content;
  }
  

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    alert(changes.prop);
  }
}

