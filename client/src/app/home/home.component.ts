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
import { MessageService } from '../_services/message.service';
import { Message } from '../_models/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  container = 'Unread';
  pageNumber = 1;
  pageSize = 5;
  loggedIn: boolean;

  constructor(
    public accountService: AccountService,
    private messageService: MessageService
  ) {}
  faDrum = faDrum;
  faMicrophone = faMicrophone;
  faKeyboard = faKeyboard;
  faPlay = faPlay;
  faQuestion = faQuestion;
  faGuitar = faGuitar;
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe((user) => {
      if (user) this.loggedIn = true;
    });
    if (this.loggedIn) {
      this.loadMessages();
    }
  }

  loadMessages() {
    this.messageService
      .getMessages(this.pageNumber, this.pageSize, this.container)
      .subscribe((response) => {
        this.messages = response.result;
        this.pagination = response.pagination;
      });
  }
}
