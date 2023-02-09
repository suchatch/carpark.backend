import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,
  ) {}

  create(createBuildingDto: CreateBuildingDto) {
    return this.buildingRepository.save(createBuildingDto);
  }

  findAll(): Promise<Building[]> {
    return this.buildingRepository.find();
  }

  findOne(id: number): Promise<Building> {
    return this.buildingRepository.findOneBy({ building_id: id });
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return this.buildingRepository.update(id, updateBuildingDto);
  }

  async remove(id: number): Promise<void> {
    await this.buildingRepository.delete(id);
  }
}
