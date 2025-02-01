import { useQuery } from "@tanstack/react-query";
import { HttpPaths } from "../Enums/httpPaths";
import { API_URL } from "../Enums/Constant";
import { Istudent, ListResponse, Student } from "../interfaces/_studentModels";
import axios from "axios";

export const getAllStudent = async (): Promise<Istudent[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_GET_ALL_STUDENT}`,
  );
  return response.data?.data;
};

export const useGetAllStudent = () => {
  const query = useQuery<Istudent[], Error>({
    queryKey: ['getAllStudent'],
    queryFn: () => getAllStudent(),
  });
  return query;
};

export const getStudentProfile = async (
  id: number,
): Promise<Istudent> => {
  if (!id || id === 0) return {} as Istudent;
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_GET_PROFILE_STUDENT}${id}`,
  );
  return response.data?.data;
};

export const useGetStudentProfile = (id: number, options = {}) =>
  useQuery<Istudent, Error>({
    queryKey: ['getStudentProfile', id],
    queryFn: () => getStudentProfile(id),
    ...options,
  });

export const AddStudent = async (
  req: Student,
): Promise<Student> => {
  const response = await axios.post(
    `${API_URL}${HttpPaths.API_ADD_STUDENT}`,
    req,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};

export const listOfSupervisors = async (): Promise<ListResponse[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_LIST_OF_SUPERVISOR}`,
  );
  return response.data?.data;
};

export const useListOfSupervisors = () => {
  const query = useQuery<ListResponse[], Error>({
    queryKey: ['listOfSupervisors'],
    queryFn: () => listOfSupervisors(),
  });
  return query;
};
export const listOfQualificationType = async (): Promise<ListResponse[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_LIST_OF_QUALIFCATION_TYPE}`,
  );
  return response.data?.data;
};

export const useListOfQualificationType = () => {
  const query = useQuery<ListResponse[], Error>({
    queryKey: ['listOfQualificationType'],
    queryFn: () => listOfQualificationType(),
  });
  return query;
};
export const listOfDepartment = async (): Promise<ListResponse[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_LIST_OF_DEPARTMENT}`,
  );
  return response.data?.data;
};

export const useListOfDepartment = () => {
  const query = useQuery<ListResponse[], Error>({
    queryKey: ['listOfDepartment'],
    queryFn: () => listOfDepartment(),
  });
  return query;
};
export const listOfSpecialization = async (): Promise<ListResponse[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_LIST_OF_SPECIALIZATION}`,
  );
  return response.data?.data;
};

export const useListOfSpecialization = () => {
  const query = useQuery<ListResponse[], Error>({
    queryKey: ['listOfSpecialization'],
    queryFn: () => listOfSpecialization(),
  });
  return query;
};
export const listOfDegrees = async (): Promise<ListResponse[]> => {
  const response = await axios.get(
    `${API_URL}${HttpPaths.API_LIST_OF_DEGREES}`,
  );
  return response.data?.data;
};

export const useListOfDegrees = () => {
  const query = useQuery<ListResponse[], Error>({
    queryKey: ['listOfDegrees'],
    queryFn: () => listOfDegrees(),
  });
  return query;
};
