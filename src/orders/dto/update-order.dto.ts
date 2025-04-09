import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsInt, IsOptional } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsInt()
    @IsOptional()
    user_id?: number;

    @IsEnum([ 'completed','pending', 'failed'])
    @IsOptional()
    status?: 'complited'|'pending' | 'failed';
}
