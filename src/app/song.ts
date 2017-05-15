export class Song {
  constructor(
    public name: string,
    public author: string,
    public transcriber: string,
    public tempo: number,
    public sections: any[],
    public form: any[]
  ) {}
}
