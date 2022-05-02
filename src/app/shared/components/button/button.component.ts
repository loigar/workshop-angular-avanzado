import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Output() handleAction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
