import { Component } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {
  public a = 0;
  public b = 0;
  public result = 0;

  public calculate(): void {
    this.result = +this.a * +this.b;
  }
}
