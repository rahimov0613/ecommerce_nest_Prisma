import { IsEmpty, IsEnum, IsInt, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number
    @IsEnum(['completed', 'pending', 'failed'],)
    @IsNotEmpty()
    status: 'complited' | 'pending' | 'failed'
}
