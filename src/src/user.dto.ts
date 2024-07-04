import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    nameUser: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    phone: string;
}