import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // With the above construction, when someone calls the GET /cats endpoint,
    // the response would look like the following (assuming that route handler returns an empty array []):
    // {
    //   "data": []
    // }
    return next.handle().pipe(map((data) => ({ data })));
  }
}
