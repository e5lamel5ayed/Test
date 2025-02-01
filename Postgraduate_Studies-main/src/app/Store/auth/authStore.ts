/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { toast } from 'sonner';
import { IUserData } from '../../Modules/auth'

interface LoginState {
  userData: IUserData;
  updateUserData: (token: IUserData) => void;
}
let userToken: IUserData = {} as IUserData;
try {
  userToken = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('UserData') ?? '')
    : ({} as IUserData);
} catch (e) {
  localStorage.clear();
  toast.error('خطأ ف المصادقة - invalid auth token');
}

export const useLoginStore = create<LoginState>((set) => ({
  userData: userToken,
  updateUserData: (data: IUserData) => set(() => ({ userData: data })),
}));
