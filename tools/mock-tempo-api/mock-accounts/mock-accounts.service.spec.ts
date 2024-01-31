import { Test, TestingModule } from '@nestjs/testing';
import { MockAccountsService } from './mock-accounts.service';

describe('MockAccountsService', () => {
  let service: MockAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockAccountsService],
    }).compile();

    service = module.get<MockAccountsService>(MockAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
