import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Rellax from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('parallaxImage', { static: false }) image!: ElementRef;

  ngAfterViewInit() {
    new Rellax(this.image.nativeElement, {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}
