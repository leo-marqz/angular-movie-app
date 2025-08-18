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
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwalDirective } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-list-genres',
  imports: [RouterLink, MatButtonModule, GenericListComponent, MatTableModule, MatPaginatorModule, SwalDirective],
  templateUrl: './list-genres.component.html',
  styleUrl: './list-genres.component.css'
})
export class ListGenresComponent {

  genreService = inject(GenreService);
  snackBar = inject(MatSnackBar);

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

  delete(id: number){
    this.genreService.delete(id).subscribe({
      next: ()=>{
        this.pagination = {page: 1, recordsPerPage: 5};
        this.loadRecords();
        this.snackBar.open(
          `✅ El género fue eliminado exitosamente!`,
          '✖',
          { duration: 5000 }
        );
      },
      error: (err)=>{
        this.snackBar.open(
          `❌ Ocurrió un error, el género no se eliminó.`,
          '✖',
          { duration: 5000 }
        );
      }
    });
  }

}
