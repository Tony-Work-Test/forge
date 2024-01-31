import { Test, TestingModule } from '@nestjs/testing';
import { MockTeamsController } from './mock-teams.controller';

describe('MockTeamsController', () => {
  let controller: MockTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockTeamsController],
    }).compile();

    controller = module.get<MockTeamsController>(MockTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
