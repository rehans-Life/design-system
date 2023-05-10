import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen: boolean = false;

  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is',
    },
    {
      title: 'What does the orange taste like?',
      content: 'The orange tastes like an orange',
    },
    {
      title: 'What color is the cat?',
      content: 'The cat is of orange color',
    },
    {
      title: 'What is a dog',
      content:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
