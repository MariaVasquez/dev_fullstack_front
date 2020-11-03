import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  data: any[] = [];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    this.getrestaurants();
  }

  getrestaurants() {
    this.restaurantService.getRestaurants().subscribe((res: any) => {
      console.log(res.data);
      this.data = res.data;
    });
  }
  

}
