import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  por: boolean = true;
  usa: boolean = false;
  esp: boolean = false;

  porTranslate(): void {
    this.por = true
    this.usa = false
    this.esp = false
  }

  usaTranslate(): void {
    this.usa = true
    this.por = false
    this.esp = false
  }

  espTranslate(): void {
    this.esp = true
    this.por = false
    this.usa = false
  }

}
