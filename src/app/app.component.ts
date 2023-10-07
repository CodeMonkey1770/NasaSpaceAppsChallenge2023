import { Component } from '@angular/core';
import { ChatGptRestService } from './chat-gpt-rest.service';
import { chatDto } from './models/chatDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NasaSpaceAppsChallenge2023';
  chat: chatDto = new chatDto;
  input: string = '';

  constructor(private service: ChatGptRestService){
    this.chat.messages.push({role: "assistant", content: "Hello fellow hacker!"});
  }

  public initiateRequest(){
    
    let request = this.service.getDataFromOpenAI(this.input).subscribe(next => {
      this.input='';
      this.chat = next; 
    });

  }

}
