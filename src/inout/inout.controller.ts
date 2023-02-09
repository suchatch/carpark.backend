import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { InoutService } from './inout.service';
import { CreateInoutDto } from './dto/create-inout.dto';
import { UpdateInoutDto } from './dto/update-inout.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { response } from 'express';

@Controller('inout')
export class InoutController {
  constructor(private readonly inoutService: InoutService) { }

  @Post()
  create(@Body() createInoutDto: CreateInoutDto) {
    return this.inoutService.create(createInoutDto);
  }

  @Get()
  findAll() {
    return this.inoutService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.inoutService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInoutDto: UpdateInoutDto) {
    return this.inoutService.update(+id, updateInoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inoutService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const fileExtension = file.originalname.split('.')[1];
        const newFileName = name.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;

        cb(null, newFileName);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(null, false);
      }
      cb(null, true)
    }
  }
  ))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("file is not an image")
    } else {
      const response = {
        filePath: `http://workshop1.tongfocus.com/api/inout/picture/${file.filename}`
      };
      return response;
    }
  }

  @Get('/getmax')
  getOneMaximumQuotationVersion() {
    return this.inoutService.getOneMaximumQuotationVersion();
  }
}
