import { AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  isInputEmpty: Boolean = true; 
  isLoading: Boolean = false;
  firstMessage: Boolean = true;

  constructor(private service: ChatGptRestService){
  }

  onInputChange() {
    this.isInputEmpty = this.input.trim() === '';
  }

  public initiateRequest(){

    if(this.input === ''){return}; 
    let input = this.input;
    this.input = ''; 
    this.isLoading = true;

   if(this.firstMessage) {
    this.chat.messages.push({"role":"user", content: input});
    this.firstMessage = false;
    } 
    this.service.getDataFromOpenAI(input).subscribe(next => {
      this.input='';
      this.chat = next; 
      this.formatResponseWithBulletPoints(); 
      console.log(next);
      this.isLoading = false;
    });
  }

  private formatResponseWithBulletPoints() {
    // Assuming response content is in chat.messages[0].content
    const responseContent = this.chat.messages[this.chat.messages.length-1].content;
    const formattedContent = responseContent.split('\n').map(line => {
      if (line.trim().match(/^\d+\./)) {
        return `• ${line}`;
      }
      return line;
    }).join('\n');
    this.chat.messages[this.chat.messages.length-1].content = formattedContent;
  }
}
