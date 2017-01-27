import { Component } from '@angular/core';

@Component({
   selector: 'my-main-observable',
   template: `
      <p>
          <my-wiki-smart></my-wiki-smart>
      </p>
      <hr>
      <p>
          <my-call-service-every-click></my-call-service-every-click>
      </p>
      <hr>
      <p>
          <my-call-service-debounce-click></my-call-service-debounce-click>
      </p>
      <br/>
      <br/>
      <br/>
      <hr>
             `
})
export class MainObservableComponent {

   constructor() {
   }
}

