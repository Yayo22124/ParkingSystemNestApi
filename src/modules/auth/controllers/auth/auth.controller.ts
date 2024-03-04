// auth.controller.ts
import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { Response } from 'express';
import { EmployeesService } from 'src/modules/employees/services/employees/employees.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private employeesService: EmployeesService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>, @Res() res: Response) {
    try {
      const login = await this.authService.validateUser(signInDto.username, signInDto.password);

      res.status(HttpStatus.OK).json({
        success: true,
        message: "Successfully logged in.",
        token: login
      });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: "Invalid credentials",
          error: error.message
        });
      } else if (error instanceof NotFoundException) {
        res.status(HttpStatus.NOT_FOUND).json({
          success: false,
          message: "Invalid username",
          error: error.message
        });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: "Internal Server Error",
          error: error.message
        });
      }
    }
  }

  @HttpCode(HttpStatus.OK)
@Get('check-token/:id')
async checkUserToken(@Param('id') userId: string, @Res() res: Response) {
  try {
    const user = await this.employeesService.getEmployee(userId);

    if (!user) {
      res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        status: false,
        message: "User not found",
      });
      return;
    }

    const isValid = await this.authService.isValidToken(user.token);

    res.status(HttpStatus.OK).json({
      success: true,
      valid: isValid ? true : false,
      message: isValid ? "Token is valid" : "Token is invalid",
    });
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}


  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Body() { userId }: { userId: string }, @Res() res: Response) {
    try {
      await this.authService.logout(userId);
      res.status(HttpStatus.OK).json({
        success: true,
        message: "Successfully logged out."
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
  }

  // Puedes agregar más métodos según tus necesidades

}
