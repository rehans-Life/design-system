import { Component } from '@angular/core';
import { Item, Statistic } from '../interfaces';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  statistics: Statistic[] = [
    {
      label: '# of Users',
      value: 22,
    },
    {
      value: 100,
      label: 'Revenue',
    },
    {
      value: 50,
      label: 'Satisfaction',
    },
  ];

  items: Item[] = [
    {
      image: 'assets/couch.jpeg',
      title: 'Couch',
      description: 'A Couch',
    },
    {
      image: 'assets/dresser.jpeg',
      title: 'Dresser',
      description: 'A Dresser',
    },
  ];
}
