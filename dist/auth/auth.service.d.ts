import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    jwtService: any;
    constructor(userService: UserService);
}
