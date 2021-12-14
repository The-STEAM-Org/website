import { Component, Input, OnInit } from '@angular/core';

export interface SubteamInfo {
  subteam: string;
  index: number;
  topics: TopicInfo[];
}
export interface TopicInfo {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-subteam',
  templateUrl: './subteam.component.html',
  styleUrls: ['./subteam.component.less'],
})
export class SubteamComponent implements OnInit {
  @Input('teaminfo')
  subteam!: SubteamInfo;

  constructor() {}

  ngOnInit(): void {}
}
