import { Injectable } from '@nestjs/common';
import { StaffService } from 'src/staff/staff.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private staffService: StaffService,
        private jwtService: JwtService) { }

    async validateUser(staff_id: string, pass: string): Promise<any> {
        const user = await this.staffService.findOne(staff_id);

        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async signIn(user: any) {
        const payload = { username: user.staff_id, sub: user.firstname_en }
        return {
            access_token: this.jwtService.sign(payload),
          };
    }
}
