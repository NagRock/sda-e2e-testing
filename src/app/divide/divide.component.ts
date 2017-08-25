import { Component } from '@angular/core';
@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent {
  public a = 0;
  public b = 0;
  public result = 0;

  public calculate(): void {
    this.result = +this.a / +this.b;
  }
}
