import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [data] = context.getArgs();
    const token = data.token;
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: 'yourSecretKey',
      });
      // You can add additional checks here if needed
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
