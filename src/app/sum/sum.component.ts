import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  public a = 0;
  public b = 0;
  public result = 0;

  public calculate(): void {
    this.result = +this.a + +this.b;
  }
}
