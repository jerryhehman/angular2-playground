import { Component } from '@angular/core';

@Component({
   selector: 'my-main-form',
   template: `<p>
                 <my-dependent-selects></my-dependent-selects>
              </p>
             `	
})
export class MainFormComponent {

   constructor() {
   }
}

