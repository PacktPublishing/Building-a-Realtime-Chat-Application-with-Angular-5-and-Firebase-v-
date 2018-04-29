import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  public newMessageText: string = '';

  constructor() { }

  ngOnInit() {
  }

  public submit(message: string): void {
    // TODO save text to Firebase backend
    console.log('New Message: ', message);

    // reset input
    this.newMessageText = '';
  }

}
