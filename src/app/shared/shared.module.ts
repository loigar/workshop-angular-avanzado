import { SelectComponent } from './components/select/select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from './components/button/button.component';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    
  ],
  declarations: [
    SelectComponent,
    ButtonComponent,
  ],
  exports: [
    SelectComponent,
    ButtonComponent,
  ],
  providers:[
    StorageService,
  ]
})
export class SharedModule { }
