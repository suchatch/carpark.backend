import { Test, TestingModule } from '@nestjs/testing';
import { InoutController } from './inout.controller';
import { InoutService } from './inout.service';

describe('InoutController', () => {
  let controller: InoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InoutController],
      providers: [InoutService],
    }).compile();

    controller = module.get<InoutController>(InoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
