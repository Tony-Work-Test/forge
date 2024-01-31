import { Test, TestingModule } from '@nestjs/testing';
import { MockTeamsService } from './mock-teams.service';

describe('MockTeamsService', () => {
  let service: MockTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockTeamsService],
    }).compile();

    service = module.get<MockTeamsService>(MockTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
