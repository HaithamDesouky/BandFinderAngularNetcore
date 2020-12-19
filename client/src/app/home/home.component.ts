import { faGuitar } from '@fortawesome/free-solid-svg-icons';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faGuitar = faGuitar;
  constructor() {}

  ngOnInit(): void {}
}
