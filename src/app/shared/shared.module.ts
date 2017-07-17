import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';


// Services
import { AuthenticatedHttpService, SpinnerService } from '../appcode/project.services';

// create loader for translation
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}
@NgModule({
    imports: [
        HttpModule,
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http],
            },
            isolate: false
        })
    ],
    declarations: [

    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterModule
    ],
    providers: []
})

export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                SpinnerService,
                { provide: Http, useClass: AuthenticatedHttpService }
            ]
        };
    }
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['nb']);
        this.translate.use('nb');
    }
}
