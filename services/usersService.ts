import axios from "axios";
import {parseFromApiToUsers} from "@/models/usersModel";

class UsersService {
  static getUsersData = async ({url}: {url: string}) => {
    try {
      const response = await axios.get(url);
      return parseFromApiToUsers(response?.data);
    } catch (error) {
      alert(error)
    }
  }
}

export default UsersService;
