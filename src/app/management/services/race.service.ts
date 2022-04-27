import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RaceInterface } from '../interfaces';

@Injectable()
export class RaceService {
  private url: string = 'assets/json/races.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(): Observable<RaceInterface[]> {
    return this.httpClient.get<RaceInterface[]>(`${this.url}`);
  }
  
}
