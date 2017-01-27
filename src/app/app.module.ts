import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { IncrementerComponent } from './components/parent/incrementer.component';
import { AuntComponent } from './components/generations/aunt.component';
import { DaughterComponent } from './components/generations/daughter.component';
import { GranddaughterComponent } from './components/generations/granddaughter.component';
import { GrandmotherComponent } from './components/generations/grandmother.component';
import { MainFormComponent } from './components/forms/main.form.component';
import { DependentSelectsFormComponent } from './components/forms/dependent.selects.form.component';
import { MainObservableComponent } from './components/observables/main.observable.component';
import { CallServiceDebounceClickComponent } from './components/observables/call.service.debounce.click.component';
import { CallServiceEveryClickComponent } from './components/observables/call.service.every.click.component';
import { WikiSmartComponent } from './components/observables/wiki.component';
import { SingletonService, WikipediaService } from './services';
import { routing } from './app.routing';

import { NavbarComponent } from './components/navbar/navbar.component';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    IncrementerComponent,
    AuntComponent,
    DaughterComponent,
    GranddaughterComponent,
    GrandmotherComponent,
    MainFormComponent,
    DependentSelectsFormComponent,
    MainObservableComponent,
    CallServiceDebounceClickComponent,
    CallServiceEveryClickComponent,
    WikiSmartComponent,
    NavbarComponent
  ],
  providers: [
    SingletonService,
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
