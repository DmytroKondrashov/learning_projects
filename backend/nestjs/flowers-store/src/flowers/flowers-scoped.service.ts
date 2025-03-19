import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class FlowersScopedService {
  getMessage() {
    return 'Scoped service message';
  }
}
