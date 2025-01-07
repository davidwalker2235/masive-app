// ************************ Interfaces for the API ************************

export interface UsersFromApi {
  id?: number;
  name?: string;
}

// ************************ Models for the app ************************
export interface GlobalData {
  Brastlewark: User[]
}

export interface User {
  id: number;
  name: string;
}
