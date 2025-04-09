import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryDto } from './create-country.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
    @IsString()
    @IsOptional()
    name?: string;
    @IsString()
    @IsOptional()
    continent_name?: string;
}
