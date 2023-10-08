import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { chatDto } from './models/chatDto';
import { Observable } from 'rxjs';
import { messageDto } from './models/messageDto';

@Injectable({
  providedIn: 'root'
})
export class ChatGptRestService {

  private chat: chatDto = new chatDto();
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: "", dangerouslyAllowBrowser: true
    });
    this.chat.model = "gpt-3.5-turbo";
    this.chat.messages.push({
      "role": "system",
      "content": "Your name is Rocky, you are the Mastermind of NASA Open data. \nResearchers from allover the world are asking you to find out what data NASA has gathered in their region. \nYour task is to provide answers using only NASA open data as a source.\nYou can only answer with knowledge gathered from NASA open data sources.\nAll the answers you give must be correct.\nKeep in mind that users may not know much details about Nasa's organization structure, always explain the source of your information and all abbreviations.\nAlways provide real links to the source of your information. do not invent links.\n"
    });
    this.chat.temperature = 0.22;
    this.chat.max_tokens = 256;
    this.chat.top_p = 0.5;
    this.chat.frequency_penalty = 0;
    this.chat.presence_penalty = 0;
  }

  public getDataFromOpenAI(input: string): Observable<chatDto> {
    const userMessage : messageDto = { "role": "user", "content": input };
    this.chat.messages.push(userMessage);

    return new Observable<chatDto>(observer => {
      this.openai.chat.completions.create(this.chat)
        .then(response => {
          let message = response.choices[response.choices.length - 1].message;
          this.chat.messages.push({ "role": message.role, "content": message.content! });  // Update the chat object with the response
          observer.next(this.chat);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
