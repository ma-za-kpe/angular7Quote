export class Quote {
  //The votes parameter is optional (denoted by the ? at the end of the name)
  constructor(
    public title: string,
    public arthor: string,
    public publisher: string,
    votes?: number
  ) {}
}
