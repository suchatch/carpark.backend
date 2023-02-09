import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
  ) { }

  create(createBranchDto: CreateBranchDto) {
    return this.branchRepository.save(createBranchDto);
  }

  findAll() {
    return this.branchRepository.find();
  }

  findOne(id: string): Promise<Branch> {
    return this.branchRepository.findOneBy({ branch_id: id });
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.branchRepository.update(id, updateBranchDto);
  }

  async remove(id: string): Promise<void> {
    await this.branchRepository.delete(id);
  }
}
