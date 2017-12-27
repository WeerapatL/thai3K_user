import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // goCategory(){
  //   this.router.navigate(['Category']); 
  // }

}
