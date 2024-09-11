import { Component, Input } from '@angular/core';
import { HistoryBig } from '../../models/history-big';

@Component({
  selector: 'tr[famous-person]',
  standalone: true,
  imports: [],
  templateUrl: './person-full.component.html',
  styleUrl: './person-full.component.css'
})
export class PersonFullComponent {
  @Input() person: HistoryBig = {} as HistoryBig;
}
