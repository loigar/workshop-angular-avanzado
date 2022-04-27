import { RaceDetailComponent, RaceListComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { RaceService, RiderService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    RaceListComponent,
    RaceDetailComponent,
  ],
  providers: [
    RiderService,
    RaceService
  ]
})
export class ManagementModule { }
