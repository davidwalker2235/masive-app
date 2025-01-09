// ************************ Interfaces for the API ************************

export interface UsersFromApi {
  id?: number;
  name?: string;
}

export interface GlobalData {
  // just an example, it could be any other data
  Brastlewark: User[]
}

// ************************ Interfaces for the app ************************

export interface User {
  id: number;
  name: string;
}
