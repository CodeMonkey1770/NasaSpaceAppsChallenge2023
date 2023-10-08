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

    let request = this.service.getDataFromOpenAI(input).subscribe(next => {
      this.input='';
      this.chat = next; 
      this.isLoading = false;
    });
  }
}
