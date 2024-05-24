import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { FormItem } from "./models/formModel";

export default abstract class GeneralForm {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    protected createForm(data: FormItem[]): FormGroup {
        this.form = this.formBuilder.group({});
        data.forEach((value: FormItem) => {
            const { data, formControlName, validator } = value;
            const control = new FormControl(data, validator)
            this.form.addControl(formControlName, control);
        });

        return this.form;
    }

    protected initForm(formGroup: FormItem[]): void {
        this.form = this.createForm(formGroup);
    }
}