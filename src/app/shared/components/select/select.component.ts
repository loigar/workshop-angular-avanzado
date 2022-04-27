import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() captionProperty: string;
  @Input() options: any;
  @Output() selectOption?: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onInput(event: any): void {
    if (this.selectOption) this.selectOption.emit(event.value);
  }

}
