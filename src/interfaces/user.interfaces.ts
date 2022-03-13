export interface IUser {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: number;
  profile_picture: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
