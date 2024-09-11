import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryData } from '../models/historyData';

@Injectable({
  providedIn: 'root'
})
export class HistoryApiService {

  constructor(private server:HttpClient) { }

  getHistory() : Observable<HistoryData> {
    return this.server.get<HistoryData>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
