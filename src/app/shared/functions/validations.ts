import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{

    static firstLetterCapitalized(): ValidatorFn {
    
        return (control: AbstractControl): ValidationErrors | null => {
    
            const value = <string> control.value;
    
            if (!value || value.length === 0) return null;
    
            const firstLetter = value[0];
    
            if (firstLetter !== firstLetter.toUpperCase()) {
                return {
                    firstLetterCapitalized: {
                        message: "The first letter must be capitalized.",
                        actual: firstLetter,
                        expected: firstLetter.toUpperCase()
                    }
                };
            }
    
            return null;
        }
    }

    static dateNotInFuture(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value as Date;

            if (!value) return null;

            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set time to midnight for comparison

            if (value > today) {
                return {
                    dateNotInFuture: {
                        message: "The date cannot be in the future.",
                        actual: value,
                        expected: today
                    }
                };
            }

            return null;
        } 
    }

}
