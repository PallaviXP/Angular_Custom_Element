import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-popup',
  template: `
    <span>Popup: {{message}}</span>
    <button (click)="handleClick()" style="width: 200px; height: 50px;">{{message}}</button>
  `, 
  styles: [],
})
export class AppComponent {
   private numberOfClicks = 0;

  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;  
  }
  private _message: string;

  handleClick() {
    this.numberOfClicks++;
    this.message = `message _ ${this.numberOfClicks}`;
    //this.action.emit(this.numberOfClicks);
  }

  //@Output()
  //closed = new EventEmitter();
}
