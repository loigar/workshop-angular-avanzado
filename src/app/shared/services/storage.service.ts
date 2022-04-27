import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { RaceInterface, RiderInterface } from '../../management/interfaces';

@Injectable()
export class StorageService {
  private races: RaceInterface[] = [];

  constructor(
  ) { 
    localStorage.setItem('races', JSON.stringify(this.races));
  }

  getRaces(): Observable<RaceInterface[]> {
    this.races = JSON.parse(localStorage.getItem('races'));
    return of(this.races);
  }

  setRaces(races: RaceInterface[]): Observable<RaceInterface[]> {
    this.races = races;
    localStorage.setItem('races', JSON.stringify(this.races));
    return of(this.races);
  }

  updateRace(race: RaceInterface): Observable<RaceInterface[]> {
    this.races.splice(this.races.findIndex(r => r.url === race.url), 1, race);
    localStorage.setItem('races', JSON.stringify(this.races));
    return of(this.races);
  }

  deleteRace(race: RaceInterface): Observable<RaceInterface[]> {
    this.races = this.races.filter(r => r.url !== race.url);
    localStorage.setItem('races', JSON.stringify(this.races));
    return of(this.races);
  }

  addRace(race: RaceInterface): Observable<RaceInterface[]> {
    this.races.push(race);
    localStorage.setItem('races', JSON.stringify(this.races));
    return of(this.races);
  }

  getRace(url: string): Observable<RaceInterface> {
    this.races = JSON.parse(localStorage.getItem('races'));
    return of(this.races.find(r => r.url === url));
  }

  addRiderToRace(race: RaceInterface, rider: RiderInterface): Observable<RaceInterface[]>{
    const raceToUpdate: RaceInterface = this.races.find(r => r.url !== race.url);
    if(!raceToUpdate.corredores) raceToUpdate.corredores = [];
    raceToUpdate.corredores.push(rider);
    localStorage.setItem('races', JSON.stringify(this.races));
    return of(this.races);
  }
}
