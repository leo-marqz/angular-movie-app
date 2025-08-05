
export interface ActorDto {
    id: number;
    name: string;
    dateOfBirth: Date;
    picture?: string;
}

export interface CreateActorDto {
    name: string;
    dateOfBirth: Date;
    picture?: File;
}
