import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, users } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto
    })
  }

  findAll() {
    return this.prisma.users.findMany({});
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id: id }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where:{id:id},
      data:updateUserDto 
    })
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where:{id:id}
    })
  }
}
