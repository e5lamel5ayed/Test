/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HttpPaths } from '../Enums/httpPaths';
import { IUserData, LoginModelForm } from '../interfaces/_authModels';
import { API_URL } from '../Enums/Constant';

export function login(model: LoginModelForm) {
  return axios.post(API_URL + HttpPaths.API_LOGIN_URL, model, {
    headers: {
      CompanyCode: model.companyCode,
    },
  });
}

export function register(model: any) {
  return axios.post(API_URL + HttpPaths.API_REGISTER_URL, model);
}

export const getUserByToken = async () => {
  const res = await axios.get(
    API_URL + HttpPaths.API_GET_USER_BY_ACCESSTOKEN_URL,
  );
  return res.data;
};

export const useGetUserByToken = () => {
  const query = useQuery<IUserData, Error>({
    queryKey: ['getUserData'],
    queryFn: () => getUserByToken(),
  });
  return query;
};

export function logout() {
  return axios.post(API_URL + HttpPaths.API_GET_USER_BY_ACCESSTOKEN_URL);
}
