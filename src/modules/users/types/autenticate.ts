import User from '../typeorm/entities/User';

export interface ISessionRequest {
  email: string;
  password: string;
}

export interface ISessionResponse {
  user: User;
  token: string;
}
