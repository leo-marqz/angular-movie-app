import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  private router: Router = inject(Router);
  private formBuilder    = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(15)
    ]}]
  });

  async saveChangesAsync(){
    //saving.........new genre...
    // this.router.navigate(['/genres']);
    console.log(this.form.value);
    // console.log('redirecting.......');
  }

  getNameErrors(): string {
    const control = this.form.controls.name;
    if (!control || !control.errors) return '';

    if (control.hasError('required')) {
      return 'El campo nombre es obligatorio.';
    }

    if (control.hasError('minlength')) {
      const requiredLength = control.getError('minlength').requiredLength;
      return `Debe tener al menos ${requiredLength} caracteres.`;
    }

    if (control.hasError('maxlength')) {
      const requiredLength = control.getError('maxlength').requiredLength;
      return `Debe tener máximo ${requiredLength} caracteres.`;
    }

    return 'El campo contiene errores.';
  }

}
