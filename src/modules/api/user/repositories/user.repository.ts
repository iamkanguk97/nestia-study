import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async findOneByEmail(email: string) {
    return await this.prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }
}
