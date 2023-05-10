import { Component } from '@angular/core';
import { Employee, Header } from '../interfaces';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data: Employee[] = [
    {
      name: 'Anikrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
      age: 24,
      job: 'Manga Artist',
      employed: true,
    },
    {
      name: 'Ali',
      age: 24,
      job: 'Designer',
      employed: false,
    },
    {
      name: 'Rehan',
      age: 24,
      job: 'Engineer',
      employed: true,
    },
  ];

  headers: Header[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'employed',
      label: 'Employed',
    },
  ];
}
