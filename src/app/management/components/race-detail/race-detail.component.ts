import { StorageService } from './../../../shared/services/storage.service';
import { RaceInterface } from './../../interfaces/race.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  race: RaceInterface;
  form: FormGroup;
  isTouchedForm: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: StorageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    const raceUrl: string = this.activatedRoute.snapshot.paramMap.get('url');
    this.storage.getRace(raceUrl).subscribe(race =>
      this.race = race
    );

    this.initForm();
  }

  initForm(): void{
    this.form = this.formBuilder.group({
      comments: []
    });

    this.setSubscriptionsToFormChanges();
  }

  saveRace(): void{
    this.race.comments = this.form.value.comments;
    this.storage.updateRace(this.race).subscribe(value => alert('operación realizada'));
  }

  private setSubscriptionsToFormChanges(): void {

    this.form.get('comments').valueChanges.subscribe(value => console.log(value))

    this.form.valueChanges
      .subscribe(() => {
        this.isTouchedForm = true;
      });
  }



}
