import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-gif',
  templateUrl: './step-gif.component.html',
  styleUrls: ['./step-gif.component.css']
})
export class StepGifComponent {
currentStep = 0;

// @HostListener('window:scroll', [])
// onScroll() {
//   const scrollY = window.scrollY;

//   if (scrollY < 1500) {
//     this.currentStep = 0;
//   } else if (scrollY < 2000) {
//     this.currentStep = 1;
//   } else if (scrollY < 2500) {
//     this.currentStep = 2;
//   } else if (scrollY < 3000) {
//     this.currentStep = 3;
//   }
// }

@ViewChild('wrapper') wrapper!: ElementRef;

@HostListener('window:scroll', [])
onScroll() {
  const wrapperEl = this.wrapper.nativeElement;

  const rect = wrapperEl.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalScroll = wrapperEl.offsetHeight - windowHeight;
  const scrolled = -rect.top;

  const progress = scrolled / totalScroll;

  if (progress <= 0.25) {
    this.currentStep = 0;
  } else if (progress <= 0.5) {
    this.currentStep = 1;
  } else if (progress <= 0.75) {
    this.currentStep = 2;
  } else {
    this.currentStep = 3;
  }
}
}
