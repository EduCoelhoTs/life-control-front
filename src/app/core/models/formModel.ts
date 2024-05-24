import { ValidatorFn } from "@angular/forms";

export interface FormItem {
    formControlName: string;
    data: string | number | null | undefined | Date;
    validator: ValidatorFn[] | ValidatorFn;
}
