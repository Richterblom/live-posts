export class Post {

  constructor(
    public title: string,
    public descrip: string,
    public imagPath: string,
    public author: string,
    public datetimeCreated: Date,
    public numberOfLikes: number,
  ) {}
}
