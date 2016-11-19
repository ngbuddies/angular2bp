import { Component, OnInit }    from '@angular/core';
import { Routes,
         RouterModule, ActivatedRoute  }         from '@angular/router';

@Component({
    templateUrl: 'blog.component.html'
})
export class blogComponent implements OnInit {

    private sub:any;
    constructor(private route:ActivatedRoute)
    {
        console.log(this.route.params);
        console.log(this.route.snapshot.params['id']);
    }

    ngOnInit()
    {
        
         console.log("dsds");   
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        let id = params['id'];
        console.log(id); 
       // Retrieve Pet with Id route param
        
    });
  
    }
}
