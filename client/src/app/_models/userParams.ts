import { User } from './user';

export class UserParams {
  instrument?: string;
  minAge = 18;
  maxAge = 99;
  pageNumber = 1;
  pageSize = 12;
  orderBy = 'lastActive';

  constructor(user: User) {
    this.instrument = '';
  }
}