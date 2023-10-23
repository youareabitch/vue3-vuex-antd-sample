import axios from "axios"

export class UserListService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users'

    getAllUsers() {
        return axios.get(this.apiUrl);
    }
}