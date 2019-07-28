type Certificate = 'U' | 'PG' | '12/12A' | '15' | '18' | 'R18';

interface GenreDTO {
  genreId: string;
  name: string;
}

export interface MovieDTO {
  movieId: string;
  title: string;
  duration: number;
  language: string;
  country: string;
  releaseYear: string;
  certificate: Certificate[];
  genres: GenreDTO[];
}
