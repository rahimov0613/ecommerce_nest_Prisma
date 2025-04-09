import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsDecimal, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @IsOptional()
    name?: string;
    @IsInt()
    @IsOptional()
    merchant_id?: number;
    @IsDecimal({ decimal_digits: '2' })
    @IsOptional()
    price?: number;
    @IsEnum(['out_of_stock', 'in_stock', 'running_on'])
    @IsOptional()
    status?: 'out_of_stock' | 'in_stock' | 'running_on';
}
