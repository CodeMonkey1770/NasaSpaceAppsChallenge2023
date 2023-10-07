import { ChatCompletionMessageParam } from "openai/resources/chat";

export class messageDto implements ChatCompletionMessageParam {
  public role!: 'system' | 'user' | 'assistant' | 'function';
  public content!: string;
}
