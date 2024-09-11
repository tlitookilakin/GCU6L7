import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonutList } from '../models/donut-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  constructor(private server: HttpClient) { }

  getDonuts() : Observable<DonutList> {
    return this.server.get<DonutList>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
}
