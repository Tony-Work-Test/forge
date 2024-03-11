import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

jest.mock('./reports.service', () => ({
  ReportsService: jest.fn().mockImplementation(() => ({
    getUserWorklogDictionary: jest.fn().mockResolvedValue([
      // Mock return value
      { userId: '1', displayName: 'User One', worklogs: [] },
    ]),
  })),
}));

describe('ReportsController', () => {
  let controller: ReportsController;
  let service: ReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [ReportsService],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getReports', () => {
    it('should return an array of user worklog dictionaries', async () => {
      const expectedResponse = [
        { userId: '1', displayName: 'User One', worklogs: [] },
      ];

      jest.spyOn(service, 'getUserWorklogDictionary').mockResolvedValue(expectedResponse);

      const result = await controller.getReports();
      expect(result).toEqual(expectedResponse);
      expect(service.getUserWorklogDictionary).toHaveBeenCalled();
    });
  });
});
