export class Song {
  public sections: any[];
  public form: any[];

  constructor(
    public name: string,
    public author: string,
    public transcriber: string,
    public tempo: number,
  ) {}
  
}
