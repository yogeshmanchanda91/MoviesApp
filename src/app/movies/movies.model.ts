export class MoviesModel {
  constructor(
    public name: string,
    public imagePath: string,
    public genre: string,
    public rating: number,
    public description?: {releaseYear: number, actors: string, plot?: string}
  ){}
}
