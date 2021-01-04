import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

//* Internal import
import { JoiErrorMapper } from '../validation/messageErrorMapper.joi';

@Injectable()
export class JoiValidatorPipe implements PipeTransform {
        constructor(private readonly schema: ObjectSchema) {}

        transform(input: any, metaData: ArgumentMetadata) {
                const { error, value } = this.schema.validate(input, { abortEarly: false });
                if (error) throw new BadRequestException(JoiErrorMapper(error));

                return value;
        }
}
