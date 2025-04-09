import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchantDto } from './create-merchant.dto';
import { IsInt, IsOptional, IsString,  } from 'class-validator';

export class UpdateMerchantDto extends PartialType(CreateMerchantDto) {
    @IsInt()
    @IsOptional()
    country_code?: number;

    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    admin_id?: number;
}
