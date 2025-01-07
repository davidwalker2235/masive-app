import {GlobalData, User, UsersFromApi} from "@/interfaces/usersInterfaces";


export const parseToUsers = (apiResponse: UsersFromApi): User => {
  return {
    id: (typeof apiResponse?.id === 'number') ? apiResponse.id : apiResponse?.id || -1,
    name: apiResponse?.name || '',
  }}

export const parseFromApiToUsers = (apiResponse: GlobalData): User[] => {
  // brastlewark is the key of the object that contains the users and will change depending on the API
  const response: User[] = apiResponse.Brastlewark || [];

  return response.map(parseToUsers);
}
