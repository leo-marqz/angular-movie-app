import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { CreateActorDto } from './actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private http = inject(HttpClient);
  private urlBase: string = environment.apiUrl + '/actors';

  public create(actor: CreateActorDto){
    const formData = this.buildFormData(actor);
    return this.http.post(this.urlBase, formData);
  }

  private buildFormData(actor: CreateActorDto): FormData {
    const form = new FormData();

    form.append('name', actor.name);
    //tomamos la fecha sin la hora.
    form.append('dateOfBirth', actor.dateOfBirth.toISOString().split('T')[0]);
    
    if(actor.picture){
      form.append('picture', actor.picture);
    }

    return form;
  }

}
