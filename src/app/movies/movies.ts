import { ActorAutoCompleteDto } from "../actors/actors";

export interface MovieDto {
    id: number;
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: string;
}

export interface CreateMovieDto {
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: File;
    genreIds?: number[];
    cinesIds?: number[];
    actors?: ActorAutoCompleteDto[];
}
