import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { SignUpDto } from './dto/signup.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';
import * as bcrypt from "bcrypt"

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) { }

  async signUp(signUpDto: SignUpDto) {
    // try {
      const {
        staff_id, prefix,role_id,password,salt,user_create
      } = signUpDto

      const hash = await bcrypt.hashSync(password, 10);

      const staff = this.staffRepository.create({
        staff_id,prefix,role_id,salt,user_create,
        password: hash
      })

      console.log(staff)

      return await this.staffRepository.save(staff)
    // } catch (e) {
    //   throw new ConflictException({
    //     message: ["staff has been already using"]
    //   })
    // }

  }

  create(createStaffDto: CreateStaffDto) {
    console.log(createStaffDto)
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
