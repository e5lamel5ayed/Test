/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { startLoading, stopLoading } from '../../Store/actions/loadingActions';

const useAxiosInterceptors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        dispatch(startLoading());
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          window.location.reload();
        } else if (error.response.status === 404) {
          toast.error('هذه الصفحة غير موجودة');
        } else if (error.response.status === 400) {
          toast.error('البيانات المرسلة غير مكتملة برجاء المحاولة مرة اخرى');
        } else if (error.response.status === 403) {
          toast.error('ليس لديك صلاحية الدخول');
        } else {
          toast.error(error);
        }
        dispatch(stopLoading());
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        dispatch(stopLoading());
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          window.location.reload();
        } else if (error.response.status === 404) {
          toast.error('هذه الصفحة غير موجودة');
        } else if (error.response.status === 400) {
          toast.error('البيانات المرسلة غير مكتملة برجاء المحاولة مرة اخرى');
        } else if (error.response.status === 403) {
          toast.error('ليس لديك صلاحية الدخول');
        } else {
          toast.error(error);
        }
        dispatch(stopLoading());
        return Promise.reject(error);
      },
    );

    // Clean up interceptors on component unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [dispatch]);
};

export default useAxiosInterceptors;
