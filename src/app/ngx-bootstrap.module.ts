import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', deLocale);

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BsDatepickerModule.forRoot(),

    ],
    exports: [

    ],
})
export class NgxBootstrapModule {
    constructor(private bsLocaleService: BsLocaleService) {
        this.bsLocaleService.use('pt-br');
    }
}
