// ************************ Interfaces for the API ************************

export interface UsersFromApi {
  id?: number;
  name?: string;
}

// ************************ Interfaces for the app ************************
export interface GlobalData {
  // just an example, it could be any other data
  Brastlewark: User[]
}

export interface User {
  id: number;
  name: string;
}
