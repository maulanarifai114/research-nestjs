import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseArrayNumberPipe implements PipeTransform {
  transform(value: string | null | undefined, metadata: ArgumentMetadata) {
    if (!value)
      throw new HttpException(
        'Validation failed (parsable array number expected)',
        400,
      );
    return value.split(',').map(Number).filter(Boolean);
  }
}
