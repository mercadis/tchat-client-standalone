import {Component} from "angular2/core";
import {MessageService} from "./message.service";
import {Message} from "./message";

@Component({
    selector: "message-list",
    styles: [".list-group-item { line-height:10px }"],
    template: `    
      <ul class="list-group">
        <li class="list-group-item" *ngFor="#message of messageList">
          <span class="text-info">[{{message.nickname}}]:</span> {{message.body}}
        </li>
      </ul>
    `
})
export class MessageListComponent {
  public messageList: Message[];
  constructor(private messageService: MessageService) {
    this.messageList = new Array<Message>();
    messageService.getList().subscribe(message => {
      this.messageList.push(message);
    });
    messageService.cleanMessageEvent.subscribe(m => {
      this.messageList = new Array<Message>();
    });
  }
}
