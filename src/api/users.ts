import request from '../utils/request';

export interface User {
    id: number;
    username: string;
    state: number;
    createdAt: number;
    updatedAt: number;
}

class UserService {

    /**
     * Users API
     * @param uri uri 
     */
    constructor(private uri: string = "/api/users") { }

    public async list(): Promise<User[]> {
        return request(this.uri, "GET", null)
    }
}

export default UserService;