import { Component }        from '@angular/core';
import { Subject }          from 'rxjs/Subject';
import { ObservableService } from '../../services/observable.service';


@Component({
  selector: 'my-call-service-debounce-click',
  template: `
<div> 
  <p class="lead">Select Colors - Uses debounce to call service at a reasonable interval</p>
  <p>
     Each click on the following checkboxes has the potential to make a call to a service, passing the array of selected colors. 
     The clicks are debounced so that a call to the service can be made only after a second. The service
     sorts the list alphabetically, then delays for a few seconds before returning. The result is displayed after the :sorted label 
     below. If you rapidly click on the checkboxes, you will see that not every click results in a service call. Rather, the
     service is called with only the most recent checked colors. This will result in improved performance.
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
export class CallServiceDebounceClickComponent {
  // Normally, would use a dynamic data structure here, but keeping it obvious for this example.
  red: boolean = true;
  blue: boolean = false;
  yellow: boolean = false;
  purple: boolean = false;
  orange: boolean = false;
  green: boolean = true;
  activeList: string[] = [];
  responseList: string[] = [];
  
	private _callSubject: Subject<number> = new Subject<number>();
  private _requestId: number = 0;
  //private _callObservable: Observable<string>;
  
  constructor (private observableService: ObservableService) {
    /* 
		this._callObservable = this._callSubject
       .debounceTime(1000)
		   .switchMap(ind => this.observableService.simpleDelayedSorter(this.activeList)
    );
    this._callObservable.subscribe(
                          data => {
                                    this.responseList.push(JSON.stringify(data));
                                    console.log("Sorted array returned from service: " + JSON.stringify(data));
                                  },
                          error => console.log(error)
                      );
                      */
    this._callSubject
       .debounceTime(1000)
		   .switchMap(id => this.observableService.simpleDelayedSorter(this.activeList, id))
       .subscribe(
              data => {
                        this.responseList.push(JSON.stringify(data));
                        console.log("Sorted array returned from service: " + JSON.stringify(data));
                      },
              error => console.log(error)
        );

    this.buildList();
  }
  
  onClick(value: string) {
    this.buildList();

    this._requestId++;
    this._callSubject.next(this._requestId);
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
