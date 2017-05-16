export class Song {
  public sections: any[];
  public form: any[];

  constructor(
    public title: string,
    public author: string,
    public transcriber: string,
    public tempo: number,
  ) {}

}
