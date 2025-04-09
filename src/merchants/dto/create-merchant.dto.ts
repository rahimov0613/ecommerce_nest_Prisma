import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMerchantDto {
    @IsInt()
    @IsNotEmpty()
    country_code: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    admin_id:number;
}
