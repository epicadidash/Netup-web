import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() title = '';
  @Input() description = 'Nothing';
  @Input() clasname = 'Nothing';
  @Input()  date= '';
}
