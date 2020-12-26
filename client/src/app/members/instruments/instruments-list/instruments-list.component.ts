import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import {
  faGuitar,
  faDrum,
  faMicrophone,
  faKeyboard,
  faPlay,
  faQuestion,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Instrument } from 'src/app/_models/instrument';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.scss'],
})
export class InstrumentsListComponent implements OnInit {
  @Input() instruments: Instrument[];
  constructor() {}

  faDrum = faDrum;
  faMicrophone = faMicrophone;
  faKeyboard = faKeyboard;
  faPlay = faPlay;
  faQuestion = faQuestion;
  faGuitar = faGuitar;
  faTimes = faTimes;

  ngOnInit(): void {}
}
