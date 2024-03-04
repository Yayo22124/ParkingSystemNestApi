import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    try {
      if (!username) {
        throw new UnauthorizedException("Username is required.");
      } else if (!password) {
        throw new UnauthorizedException("Password is required.");
      }

      const user = await this.prisma.employees.findUnique({
        where: { username: username },
      });

      if (user && user.password === password) {
        const { password, ...result } = user;

        const payload = { sub: user.id, username: user.username };
        const accessToken = await this.jwtService.signAsync(payload);

        // Guardar el token en la base de datos
        await this.prisma.employees.update({
          where: { id: user.id },
          data: { token: accessToken },
        });

        return { access_token: accessToken };
      } else if (!user) {
        throw new NotFoundException("Username not found.");
      } else {
        throw new UnauthorizedException("Password is not correct.");
      }
    } catch (error) {
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw new UnauthorizedException(`Error signing in employee: ${error.message}`);
      }
      throw new Error(`Error signing in employee: ${error.message}`);
    }
  }

  async isValidToken(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async logout(userId: string): Promise<void> {
    await this.prisma.employees.update({
      where: { id: userId },
      data: { token: null }, // Borrar el token de la base de datos
    });
  }
}
