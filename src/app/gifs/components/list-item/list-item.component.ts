import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent { 
  imageUrl = input.required<string>()
}
