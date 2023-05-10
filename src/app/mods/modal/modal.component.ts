import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  // Creatng a new custom close event.
  // Sending this event as an output so the parent can listen to it
  @Output() close = new EventEmitter();

  // This gives us access to the host element of the modal component
  // which is the app-modal element
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Here we taking the host element which is the app-modal element
    // and then taking it from the mods-home component and putting it
    // inside of our body.

    // Problem is each time we rendering this component we put it hosts
    // inside of the body so angular isnt responsible for removing this
    // element from the DOM when routes are changed cause its only going
    // to remove the mods-home component and this element doesnt exists
    // inside of it.

    document.body.appendChild(this.elementRef.nativeElement);
  }

  // Removing the host element from the DOM when routes change.
  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }

  closeModal() {
    // An time close modal function runs it emits the close event
    this.close.emit();
  }
}
