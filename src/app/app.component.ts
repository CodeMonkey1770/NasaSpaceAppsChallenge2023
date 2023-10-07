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

  constructor(private service: ChatGptRestService){

    let request = service.getDataFromOpenAI('tell me sonething about Space!').subscribe(next => {
      console.log(next);
      this.chat = next; 
    });
/*
    let request = this.input.createRequest();

    service.getDataFromOpenAI(request).subscribe(next => {
      console.log('returned');
      this.temptext = next;
    });


    setTimeout(() => {
      console.log('sleep');
      this.loading = false;
      this.text = this.temptext;
      console.log('speak!');
      console.log(this.text?.chapter1?.text!);
      speech.speakText(this.text?.chapter1?.text!);
    }, 5000);

*/

  }

}
