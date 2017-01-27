import { Component } from '@angular/core';

@Component({
   selector: 'my-dependent-selects',
   styles: [`
               div {padding: 10px; margin: 3px;}
               td {padding-right: 5px;border-style: dotted; border-width: 1px;}
			   select {width: auto;}
			   .selected {padding: 2px;}
            `],
   template: `
              <div>
			    <p class="lead">This form demonstrates alternative ways of binding properties to select form elements</p>
			    <p>This option element uses the default -- no [value] or [ngValue]. The property associated with the selection
				    is set to the desc of the selected dropdown.</p>
			    <select [(ngModel)]="stateSelect1" name="stateSelect1" class="form-control">
				   <option></option>
				   <option *ngFor="let st of stateList">{{st.name}}</option>
				</select>
				<span class="selected">{{stateSelect1}}</span>
			  </div>
              <div>
			    <p>This option element uses [value]="st.abbr". The property associated with the selection is set to the abbreviation of the selected option.</p>
			    <select [(ngModel)]="stateSelect2" name="stateSelect2" class="form-control">
				   <option></option>
				   <option *ngFor="let st of stateList" [value]="st.abbr">{{st.name}}</option>
				</select>
				<span class="selected">{{stateSelect2}}</span>
			  </div>
              <div>
			    <p>This option element uses [ngValue]="st". The property associated with the selection is set to the entire object of the selected option.</p>
			    <select [(ngModel)]="stateSelect3" name="stateSelect3" class="form-control">
				   <option></option>
				   <option *ngFor="let st of stateList" [ngValue]="st">{{st.name}}</option>
				</select>
				<span class="selected">{{diagnostic(stateSelect3)}}</span>
			  </div>
              <div>
			    <p>This option element uses [ngValue]="st". The property associated with the selection is set to the entire object of the selected option.
				   When a value is selected from the state list, the county list is populated.
				</p>
			    <select [(ngModel)]="stateSelect4" name="stateSelect4" (ngModelChange)="selectState($event)" class="form-control">
				   <option></option>
				   <option *ngFor="let st of stateList" [ngValue]="st">{{st.name}}</option>
				</select>
				<span class="selected">{{diagnostic(stateSelect4)}}</span>
			    <select [(ngModel)]="countySelect" name="countySelect" (ngModelChange)=selectCounty($event) class="form-control">
				   <option></option>
				   <option *ngFor="let cnty of countyList" [ngValue]="cnty">{{cnty.name}}</option>
				</select>
				<span class="selected">{{diagnostic(countySelect)}}</span>
			  </div>
             `	
})
export class DependentSelectsFormComponent {
	stateList: State[] = [];
	countyList: County[];
	stateCountyMap: { [abbr: string]: County[] } = {};
	stateSelect1: string;
	stateSelect2: string;
	stateSelect3: string;
	countySelect: string;

   constructor() {
	   this.stateList.push({abbr: 'Ky', name: 'Kentucky'});
	   this.stateList.push({abbr: 'Oh', name: 'Ohio'});

       let kyCounties: County[] = [];
	   kyCounties.push({fips: '21015', name: 'Boone'}); 
	   kyCounties.push({fips: '21037', name: 'Campbell'}); 
	   kyCounties.push({fips: '21117', name: 'Kenton'});
	   this.stateCountyMap['Ky'] = kyCounties;
       let ohCounties: County[] = [];
	   ohCounties.push({fips: '39061', name: 'Hamilton'}); 
	   ohCounties.push({fips: '39017', name: 'Butler'}); 
	   ohCounties.push({fips: '39165', name: 'Warren'});
	   this.stateCountyMap['Oh'] = ohCounties;
   }

   diagnostic(inObj: any) {
	   return JSON.stringify(inObj);
   }

   selectState(selectedStateObj: State) {
	   console.log(this.diagnostic(selectedStateObj));
	   this.countyList = this.stateCountyMap[selectedStateObj.abbr];
   }
   selectCounty(selectedCountyObj: County) {
	   console.log(this.diagnostic(selectedCountyObj));
   }
}

export interface State {
	abbr: string;
	name: string;
}

export interface County {
	fips: string;
	name: string;
}

