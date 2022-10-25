import { PartialType } from '@nestjs/mapped-types';
import { CreateInoutDto } from './create-inout.dto';

export class UpdateInoutDto extends PartialType(CreateInoutDto) {}
