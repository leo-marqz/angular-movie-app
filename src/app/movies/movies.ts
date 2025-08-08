
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
}
