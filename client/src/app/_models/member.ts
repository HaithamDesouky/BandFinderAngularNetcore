import { Instrument } from './instrument';
import { Photo } from './photo';

export interface Member {
  username: string;
  Gender: string;
  dateOfBirth: string;
  bandName: string;
  created: Date;
  lastActive: Date;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  instruments: Instrument[];
  photos: Photo[];
  photoUrl: string;
  age: number;
}
