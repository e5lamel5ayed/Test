/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

export interface UserModel {
  user: IUserData;
}
export interface AuthModel {
  token: IUserData;
}
export interface LoginModelForm {
  username: string;
  password: string;
  companyCode: string;
  userToken: string;
}

export interface IUserData {
  userName: string;
  fullName: string;
  email: string;
  refreshToken: null;
  jobId: number;
  userId: number;
  isAuthenticated: boolean;
  roles: any[];
  userCode: number;
}

export interface InputCreateModel {
  inputName: string;
  title: ReactNode;
  value?: any;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  isPassword?: boolean;
  isNumber?: boolean;
  disabled?: boolean;
}
