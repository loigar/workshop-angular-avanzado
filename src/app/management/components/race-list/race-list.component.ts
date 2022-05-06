import { StorageService } from './../../../shared/services/storage.service';
import { RaceInterface } from './../../interfaces/race.interface';
import { Component, OnInit } from '@angular/core';
import { RaceService, RiderService } from '../../services';
import { RiderInterface } from '../../interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UciManagerState } from 'src/app/store';
import * as AppActions from 'src/app/store/app.action';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
 
  raceData: RaceInterface[];
  ridersData: RiderInterface[];
  selectedRaceData: RaceInterface;
  configuredRaceData: RaceInterface[];

  isUpdate: boolean = false;

  constructor(
    private raceService: RaceService,
    private riderService: RiderService,
    private router: Router,
    private storage: StorageService,
    private store: Store<UciManagerState>,
  ) { }

  ngOnInit() {
    this.raceService.getList().subscribe(list => this.raceData = list);
    this.riderService.getList().subscribe(list => this.ridersData = list);
    this.storage.getRaces().subscribe(list => this.configuredRaceData = list);
  }

  selectRace(race: RaceInterface): void {
    this.storage.getRace(race.url).subscribe(storageRace => {
      this.isUpdate = !!storageRace;
      this.selectedRaceData = this.isUpdate ? storageRace : race;
    });
  }

  addRider(rider: RiderInterface): void {
    if (!this.selectedRaceData) return;
    if(!this.selectedRaceData.corredores) this.selectedRaceData.corredores = [];
    this.selectedRaceData.corredores.push(rider);
  }

  configureRace(): void{
    if(this.isUpdate) this.storage.updateRace(this.selectedRaceData);
    else this.storage.addRace(this.selectedRaceData).subscribe(data => this.configuredRaceData = data);

    this.store.dispatch(new AppActions.SetCurrentPageAsDirty(true));
    this.selectedRaceData = null;
  }

  viewRace(race: RaceInterface): void {
    this.router.navigate([`/management/race/${race.url}`])
  }

  saveChanges(): void {
    this.store.dispatch(new AppActions.SetCurrentPageAsDirty(false));
    this.storage.saveChanges();
  }
}
