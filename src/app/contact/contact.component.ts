import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { DataService } from '../DataService/dataService';
import { ContactRequest } from '../Model/ContactRequest';

@Component({
    templateUrl: 'contact.component.html',
     providers: [DataService]
})
export class contactComponent implements OnInit {
    public myItems: any[];
    private contactRequest = new ContactRequest();
    constructor(private _dataService: DataService, public route: Router) { }
    ngOnInit(): void {

    }
    public addContact(): void {
        this._dataService
            .Add(this.contactRequest)
            .subscribe((data: any[]) => this.myItems = data,
            error => console.log(error),
            () => {

            }
            );
    }
}
