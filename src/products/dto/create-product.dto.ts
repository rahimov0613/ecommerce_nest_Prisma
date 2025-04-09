import { IsDecimal, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsInt()
    @IsNotEmpty()
    merchant_id:number

    @IsDecimal({ decimal_digits: '2' })
    @IsNotEmpty()
    price:number

    @IsEnum(['out_of_stock', 'in_stock', 'running_on'])
    @IsNotEmpty()
    status:'out_of_stock' | 'in_stock' | 'running_on'
    
}
