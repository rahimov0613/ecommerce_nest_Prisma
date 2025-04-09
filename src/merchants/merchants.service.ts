import { Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MerchantsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createMerchantDto: CreateMerchantDto) {
    const { admin_id,country_code, ...rest } = createMerchantDto;
  
    return await this.prisma.merchants.create({
      data: {
        ...rest,
        userId: {
          connect: {
            id: admin_id,
          },
        },
        country: {
          connect: {
            code: country_code,
          },
        },
      },
    });
  }
  
  findAll() {
    return this.prisma.merchants.findMany({})
  }

  findOne(id: number) {
    return this.prisma.merchants.findUnique({

      where:{id:id}
    })
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return this.prisma.merchants.update({
      where:{id:id},
      data:updateMerchantDto
    })
  }

  remove(id: number) {
    return this.prisma.merchants.delete({
      where:{id:id}
    })
  }
}
