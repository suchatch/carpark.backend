import { IsNotEmpty } from "class-validator";

export class SignUpDto {

    @IsNotEmpty()
    staff_id: string

    @IsNotEmpty()
    prefix: string

    @IsNotEmpty()
    role_id: number

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    salt: string

    @IsNotEmpty()
    user_create: string
}