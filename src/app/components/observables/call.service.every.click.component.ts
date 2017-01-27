import { Component }        from '@angular/core';
import { ObservableService } from '../../services/observable.service';


@Component({
  selector: 'my-call-service-every-click',
  template: `
<div> 
  <p class="lead">Select Colors - Calls service on every click</p>
  <p>
     Each click on the following checkboxes makes a call to a service, passing the array of selected colors. The service
     sorts the list alphabetically, then delays for a few seconds before returning. The result is displayed after the :sorted label 
     below. If you rapidly click on the checkboxes, you will see that each click results in a separate call to the service, even when
     other calls are already in process. For an expensive service call this could be problematic, since there are irrelevant service
     calls that are being performed.
  </p>
  <form #theForm="ngForm">
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="red=$event; onClick($event)" [(ngModel)]="red" name="red">red</label>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="blue=$event; onClick($event)" [(ngModel)]="blue" name="blue">blue</label>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="yellow=$event; onClick($event)" [(ngModel)]="yellow" name="yellow">yellow</label>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="purple=$event; onClick($event)" [(ngModel)]="purple" name="purple">purple</label>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="orange=$event; onClick($event)" [(ngModel)]="orange" name="orange">orange</label>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" (ngModelChange)="green=$event; onClick($event)" [(ngModel)]="green" name="green">green</label>
    </div>
  </form>
  <div>input: {{activeList | json}}</div>
  <div>sorted: <ol><li *ngFor="let x of responseList">{{x}}</li></ol></div>
</div>
  `,
  providers: [ObservableService]
})
export class CallServiceEveryClickComponent {
  // Normally, would use a dynamic data structure here, but keeping it obvious for this example.
  red: boolean = true;
  blue: boolean = false;
  yellow: boolean = false;
  purple: boolean = false;
  orange: boolean = false;
  green: boolean = true;
  activeList: string[] = [];
  responseList: string[] = [];

  private _requestId: number = 0;

  constructor (private observableService: ObservableService) { 
    this.buildList();
  }
  
  onClick(value: string) {
    this.buildList();
    this._requestId++;

    this.observableService.simpleDelayedSorter(this.activeList, this._requestId).subscribe(
         data => {
                   this.responseList.push(JSON.stringify(data));
                   console.log("Sorted array returned from service: " + JSON.stringify(data));
                 },
         error => console.log(error)
    );
  }

  private buildList() {
    this.activeList = [];

    if (this.red) {this.activeList.push('red');}
    if (this.blue) {this.activeList.push('blue');}
    if (this.yellow) {this.activeList.push('yellow');}
    if (this.purple) {this.activeList.push('purple');}
    if (this.orange) {this.activeList.push('orange');}
    if (this.green) {this.activeList.push('green');}

	  console.log("Click: " + JSON.stringify(this.activeList));
  }
}
