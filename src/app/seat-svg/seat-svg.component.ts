import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-svg',
  templateUrl: './seat-svg.component.html',
  styleUrls: ['./seat-svg.component.css']
})
export class SeatSvgComponent {
  @Input() id: string[] = [];

  isSelected(rectId: string): boolean {
    return this.id.includes(rectId);
  }
} 
