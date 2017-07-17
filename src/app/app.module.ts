import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.routes';

// Modules
import { ComponentsModule, ServiceModule, SharedModule, AdminModule } from './appcode/project.modules';

// directives
import { SpinnerDirective } from './appcode/project.directives';

// Components
import { AppComponent } from './appcode/project.components';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerDirective
  ],
  imports: [
    AdminModule,
    AppRouterModule,
    BrowserModule,
    ComponentsModule,
    ServiceModule,
    SharedModule.forRoot()
  ],
  exports: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
