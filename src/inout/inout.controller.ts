import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InoutService } from './inout.service';
import { CreateInoutDto } from './dto/create-inout.dto';
import { UpdateInoutDto } from './dto/update-inout.dto';

@Controller('inout')
export class InoutController {
  constructor(private readonly inoutService: InoutService) {}

  @Post()
  create(@Body() createInoutDto: CreateInoutDto) {
    return this.inoutService.create(createInoutDto);
  }

  @Get()
  findAll() {
    return this.inoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInoutDto: UpdateInoutDto) {
    return this.inoutService.update(+id, updateInoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inoutService.remove(id);
  }
}
