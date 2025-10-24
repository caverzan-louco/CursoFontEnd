import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginPage(): {};
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    getProfile(req: any): any;
}
