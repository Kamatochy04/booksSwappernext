import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<any>;
    register(dto: CreateUserDto): Promise<CreateUserDto & import("../user/entities/user.entity").UserEntity>;
}
