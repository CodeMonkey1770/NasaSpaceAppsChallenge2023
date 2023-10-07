import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/completions";
import { messageDto } from "./messageDto";

export class chatDto implements ChatCompletionCreateParamsNonStreaming {
  public model!: string;
  public messages: messageDto[] = [];
  public temperature!: number;
  public max_tokens!: number;
  public top_p!: number;
  public frequency_penalty!: number;
  public presence_penalty!: number;
}
