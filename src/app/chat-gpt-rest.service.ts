import { Injectable } from '@angular/core';
import OpenAI from "openai";

@Injectable({
  providedIn: 'root'
})
export class ChatGptRestService {

  const openai = new OpenAI({
    apiKey: "AAAAAAA",
  });

  private chat: chatDto;

  constructor() {
    chat.model = "gpt-3.5-turbo";
    chat.messages.push({
         "role": "system",
         "content": "Your name is Rocky, you are the Mastermind of NASA Open data. \nResearchers from allover the world are asking you to find out what data NASA has gathered in their region. \nYour task is to provide answers using only NASA open data as a source.\nYou can only answer with knowledge gathered from NASA open data sources.\nAll the answers you give must be correct.\nKeep in mind that users may not know much details about Nasa's organization structure, always explain the source of your information and all abbreviations.\nAlways provide real links to the source of your information. do not invent links.\n"
    });
    chat.temperature = 0.22;
    chat.max_tokens = 256;
    chat.top_p = 0.5;
    chat.frequency_penalty = 0;
    chat.presence_penalty = 0;
  }

   public getDataFromOpenAI(input: string): Observable<chatDto> {
      const userMessage = { "role": "user", "content": input };

      return new Observable<chatDto>(observer => {
        openai.chat.completions.create({ messages: [userMessage, ...this.chat.messages] })
          .then(response => {
            this.chat = response.data; // Update the chat object with the response
            observer.next(this.chat);
            observer.complete();
          })
          .catch(error => {
            observer.error(error);
          });
      });
   }
}
