import {GlobalData, User, UsersFromApi} from "@/interfaces/usersInterfaces";


export const parseToUsers = (apiResponse: UsersFromApi): User => {
  return {
    id: (typeof apiResponse.id === 'number') ? apiResponse.id : apiResponse.id || -1,
    name: apiResponse?.name || '',
  }}

export const parseFromApiToUsers = (apiResponse: GlobalData): User[] => {
  const response: User[] = apiResponse.Brastlewark || [];

  return response.map(parseToUsers);
}
