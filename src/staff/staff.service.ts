import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  create(createStaffDto: CreateStaffDto) {
    return this.staffRepository.save(createStaffDto);
  }

  findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  findOne(id: string): Promise<Staff> {
    return this.staffRepository.findOneBy({ staff_id: id });
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return this.staffRepository.update(id, updateStaffDto);
  }

  async remove(id: string): Promise<void> {
    await this.staffRepository.delete(id);
  }
}
