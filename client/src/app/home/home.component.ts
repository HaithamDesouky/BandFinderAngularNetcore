import { Component, OnInit } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { UserParams } from '../_models/userParams';
import { Member } from '../_models/member';
import { Pagination } from '../_models/pagination';
import {
  faGuitar,
  faDrum,
  faMicrophone,
  faKeyboard,
  faPlay,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faGuitar = faGuitar;
  constructor(public accountService: AccountService) {}
  faDrum = faDrum;
  faMicrophone = faMicrophone;
  faKeyboard = faKeyboard;
  faPlay = faPlay;
  faQuestion = faQuestion;

  ngOnInit(): void {}
}
