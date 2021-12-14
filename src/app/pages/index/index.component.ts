import { Component, OnInit } from '@angular/core';
import { SUBTEAMS } from '../../../assets/data/subteams';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  readonly subteams = SUBTEAMS;
  constructor() {}

  ngOnInit(): void {}
}
