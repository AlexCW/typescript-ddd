type Certificate = 'U' | 'PG' | '12/12A' | '15' | '18' | 'R18';

interface GenreDTO {
  genre_id: string;
  name: string;
}

export interface MovieDTO {
  movie_id: string;
  title: string;
  duration: number;
  language: string;
  country: string;
  releaseYear: string;
  certificate: Certificate[];
  genres: GenreDTO[];
};
