import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RiderInterface } from '../interfaces';

@Injectable()
export class RiderService {
  private url: string = 'assets/json/riders.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(): Observable<RiderInterface[]> {
    return this.httpClient.get<RiderInterface[]>(`${this.url}`);
  }
}
