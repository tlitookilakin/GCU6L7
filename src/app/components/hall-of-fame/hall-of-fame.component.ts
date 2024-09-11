import { Component } from '@angular/core';
import { HistoryApiService } from '../../services/history-api.service';
import { HistoryData } from '../../models/historyData';
import { PersonFullComponent } from '../person-full/person-full.component';

@Component({
  selector: 'app-hall-of-fame',
  standalone: true,
  imports: [PersonFullComponent],
  templateUrl: './hall-of-fame.component.html',
  styleUrl: './hall-of-fame.component.css'
})
export class HallOfFameComponent {
  people: HistoryData = {} as HistoryData;

  constructor(private api:HistoryApiService) {}

  ngOnInit() : void {
    this.api.getHistory().subscribe(r => this.people = r);
  }
}
