import { Component } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {
  public a = 0;
  public b = 0;
  public result = 0;

  public calculate(): void {
    this.result = +this.a - +this.b;
  }
}
