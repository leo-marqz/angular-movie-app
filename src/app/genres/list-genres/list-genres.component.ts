import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenreService } from '../genre.service';
import { environment } from '../../../environments/environment.development';
import { GenreDto } from '../genre';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatTableModule } from "@angular/material/table";
import { HttpResponse } from '@angular/common/http';
import { PaginationDto } from '../../shared/models/pagination';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-genres',
  imports: [RouterLink, MatButtonModule, GenericListComponent, MatTableModule, MatPaginatorModule],
  templateUrl: './list-genres.component.html',
  styleUrl: './list-genres.component.css'
})
export class ListGenresComponent {

  genreService = inject(GenreService);
  genres!: GenreDto[];

  tableColumns = ['Id', 'Name', 'Actions'];

  pagination: PaginationDto = {page: 1, recordsPerPage: 5};
  totalRecords!: number;

  constructor() {
    this.loadRecords();
  }

  loadRecords(){
    this.genreService
      .get(this.pagination)
      .subscribe((response: HttpResponse<GenreDto[]>)=>{
        console.log(response);
        this.genres = response.body as GenreDto[];
        const header = response.headers.get("x-total-records") as string;
        this.totalRecords = parseInt(header, 10);
      });
  }

  handlePagination(event: PageEvent){
    this.pagination = { 
      page: event.pageIndex + 1, 
      recordsPerPage: event.pageSize 
    };
    this.loadRecords();
  }

}
