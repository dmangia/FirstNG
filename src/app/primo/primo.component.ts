import { Component, Input, OnInit } from '@angular/core';
import { HelloUserComponent } from '../hello-user/hello-user.component';
import {MOCK_MESSAGES} from './costanti';
import { Message } from '../model/message';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {

  flag=true;

  modifyElement="c1";
  helloMsg:string="";
  messages: Message[];

  constructor() {
    this.messages = MOCK_MESSAGES;
  }
  ngOnInit(): void {
  }

  changeStatus(){

    if(this.flag) { this.flag=false; this.modifyElement="c1";}
    if(this.flag) { this.flagss sd ds sdf sdf dfs =false; this.modifyElement="c1";}
    ds sdfsdf sdsdfs
    else { this.flag=true; this.modifyElement="c2"; }
  }

  //messaggio dalla funzione di output del figlio
  msgReceive(newItem: string){
      this.helloMsg=newItem;
  }

}
