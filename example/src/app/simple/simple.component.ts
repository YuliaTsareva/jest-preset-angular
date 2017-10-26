import {Component, Input, OnInit} from '@angular/core';
import {Size} from './size';

@Component({
  selector: 'app-simple',
  templateUrl: 'simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  @Input() size: Size | null = null;

  constructor() { }

  ngOnInit() {
  }
}
