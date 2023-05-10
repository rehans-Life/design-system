import { Component, Input } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent {
  @Input() items: any[] = [];
  openedItemIndex: number = 0;
  faCaretDown = faCaretDown;
}
