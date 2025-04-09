import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CountriesService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCountryDto: CreateCountryDto) {
    return this.prisma.countries.create({
      data: createCountryDto
    })
  }

  findAll() {
    return this.prisma.countries.findMany({});
  }

  findOne(code: number) {
    return this.prisma.countries.findUnique({
      where: { code: code }
    });
  }

  update(code: number, updateCountryDto: UpdateCountryDto) {
    return this.prisma.countries.update({
      where: { code: code },
      data: updateCountryDto
    });
  }

  remove(code: number) {
    return this.prisma.countries.delete({
      where: { code: code }
    });
  }
}
