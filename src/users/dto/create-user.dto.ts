import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    first_name:string;
    
    @IsInt()
    country_code:number;
}
