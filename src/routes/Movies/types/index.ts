export type typeModalImage = {
  title?: string;
  image?: string;
}

export type typeItemMovies = {
  ref: any,
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  onClickImage?: any;
}

export type typeDataMovies = {
  Response: string;
  Search: typeItemMovies[],
  totalResults: string;
}