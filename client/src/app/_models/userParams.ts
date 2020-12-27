import { User } from './user';

export class UserParams {
  instrument?: string;
  minAge = 18;
  maxAge = 210;
  pageNumber = 1;
  pageSize = 8;
  orderBy = 'lastActive';

  constructor(user: User) {
    this.instrument = '';
  }
}
