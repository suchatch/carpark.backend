import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInoutDto } from './dto/create-inout.dto';
import { UpdateInoutDto } from './dto/update-inout.dto';
import { Inout } from './entities/inout.entity';

@Injectable()
export class InoutService {
  constructor(
    @InjectRepository(Inout)
    private inoutRepository: Repository<Inout>,
  ) {}

  create(createInoutDto: CreateInoutDto) {
    return this.inoutRepository.save(createInoutDto);
  }

  findAll() {
    return this.inoutRepository.find();
  }

  findOne(id: number): Promise<Inout> {
    return this.inoutRepository.findOneBy({ inout_id: id });
  }

  update(id: number, updateInoutDto: UpdateInoutDto) {
    return this.inoutRepository.update(id, updateInoutDto);
  }

  async remove(id: string): Promise<void> {
    await this.inoutRepository.delete(id);
  }
}
