import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    this.save.emit();
  }

  onCancel(){
    this.cancel.emit();
  }

}
