import { inject, Injectable } from '@angular/core';
import { CreateGenreDto, GenreDto } from './genre';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginationDto } from '../shared/models/pagination';
import { buildQueryParams } from '../shared/functions/querystring';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private urlBase: string = environment.apiUrl + '/genres';
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  public get(pagination: PaginationDto): Observable<HttpResponse<GenreDto[]>> {
    let queryParams = buildQueryParams(pagination);
    return this.http.get<GenreDto[]>(this.urlBase, { 
      params: queryParams, 
      observe: 'response' 
    });
  }

  public getById(id: number): Observable<GenreDto> {
    return this.http.get<GenreDto>(`${this.urlBase}/${id}`)
  }

  public create(genre: CreateGenreDto){
    return this.http.post(this.urlBase, genre);
  }

  public update(id: number, genre: CreateGenreDto){
    return this.http.put(`${this.urlBase}/${id}`, genre);
  }

  public delete(id: number){
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
