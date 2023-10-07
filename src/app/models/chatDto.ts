export class chatDto {
  public model : string;
  public messages : messageDto<>;
  public temperature: number;
  public max_tokens: number;
  public top_p: number;
  public frequency_penalty: number;
  public presence_penalty: number;
}
