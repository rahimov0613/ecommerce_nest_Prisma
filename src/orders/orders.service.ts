import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }
  create(createOrderDto: CreateOrderDto) {
    const { user_id, ...rest } = createOrderDto;
    return this.prisma.orders.create({
      data: {
        ...rest,
        user: {
          connect: {
            id: user_id,
          },
        } 
      }
    })
  }

  findAll() {
    return this.prisma.orders.findMany({});
  }

  findOne(id: number) {
    return this.prisma.orders.findUnique({
      where: { id: id }
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.orders.update({
      where: { id: id },
      data: updateOrderDto
    })
  }

  remove(id: number) {
    return this.prisma.orders.delete({
      where: { id: id }
    })
  }
}
