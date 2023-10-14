import axios, { AxiosPromise } from "axios"
import { usersData } from "../interface/usersData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise <usersData[]> =>{
  const response = axios.get(API_URL +'/users')
  return response;
}
export function useUsersData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['users-data'],
    retry:2
  })
  return{
    ...query,
    data: query.data?.data
  }
}