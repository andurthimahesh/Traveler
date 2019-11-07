import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../shared/bus.service';
import { Bus } from '../model/bus';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bus-byid',
    templateUrl: 'busById.component.html'
})

export class BusByIdComponent implements OnInit {
    bus: Bus;
     id: number;
 
    private routeSub: Subscription;
    constructor(private busService: BusService, private http: HttpClient, private route: ActivatedRoute) { }
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.http.get("http://localhost:3000/bus/getby/" + this.id).subscribe((response) => {
            this.bus = <Bus>response;
            console.log(this.bus)
        })
    }
    // geting(id:number) {
    //     this.busService.byid(this.id).subscribe((response) => {
            
    //         this.bus = <Bus>response;
    //         console.log(this.bus)
          
    //     })
    // }
}