import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    register(dto: CreateUserDto): Promise<CreateUserDto & import("../user/entities/user.entity").UserEntity>;
}
