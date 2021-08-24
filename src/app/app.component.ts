import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolation';
  serverId: number = 10;
  serverName: string = "Cod;tas";
  serverStatus: string = "offline";
  designation = [{name: "Sr.1", designation:" Jr Software Associate"},
                 {name: "Sr.2", designation:"Senior Software Associate"},
                 {name: "Sr.3", designation:"Senior Software Associate ( Tech Lead )"}
]}
