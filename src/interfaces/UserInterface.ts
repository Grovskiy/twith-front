export interface User {
  id: string | null;
  email: string;
  firstName: string;
  lastName: string;
  nickName: string;
  token: string;
}

export interface UserState {
  token: string | null;
  user: User | null;
}

export interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nickName: string;
}

export interface SignInData {
  email: string;
  password: string;
}
