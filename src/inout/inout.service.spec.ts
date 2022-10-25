import { Test, TestingModule } from '@nestjs/testing';
import { InoutService } from './inout.service';

describe('InoutService', () => {
  let service: InoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InoutService],
    }).compile();

    service = module.get<InoutService>(InoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
