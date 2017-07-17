import { NgModule } from '@angular/core';

// Module
import { ComponentsModule, SharedModule } from '../appcode/project.modules';
import {
  HomeComponent} from '../appcode/project.components';
@NgModule({
    imports: [
        SharedModule,
        ComponentsModule
    ],
    declarations: [
         HomeComponent
    ],
    exports: [],
    providers: []
})

export class AdminModule { }
