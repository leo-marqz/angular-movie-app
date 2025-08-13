import { inject, Injectable } from '@angular/core';
import { CreateGenreDto, GenreDto } from './genre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private urlBase: string = environment.apiUrl + '/genres';
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  public get(): Observable<GenreDto[]> {
    return this.http.get<GenreDto[]>(this.urlBase);
  }

  public getById(id: number){
    //
  }

  public create(genre: CreateGenreDto){
    return this.http.post(this.urlBase, genre);
  }

  public update(){
    //
  }

  public delete(){
    //
  }
}
