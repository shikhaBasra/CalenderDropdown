import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from './shared.module';

// Components
import {
  HeaderComponent,DropdownComponent, HeaderMenuComponent, ModalComponent, FooterComponent, CustomCalenderComponent
} from '../appcode/project.components';

import { CustomDropdownPipe } from '../shared/dropdown/dropdown.pipe';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    ModalComponent,
    DropdownComponent,
    CustomCalenderComponent,
    CustomDropdownPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    DropdownComponent,
    CustomCalenderComponent,
    CustomDropdownPipe
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {
}
