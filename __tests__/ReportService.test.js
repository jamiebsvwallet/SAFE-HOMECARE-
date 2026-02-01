/**
 * Tests for ReportService
 */

import ReportService from '../src/services/ReportService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe('ReportService', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('getAllReports', () => {
    it('returns empty array when no reports exist', async () => {
      AsyncStorage.getItem.mockResolvedValue(null);
      const reports = await ReportService.getAllReports();
      expect(reports).toEqual([]);
    });

    it('returns parsed reports when they exist', async () => {
      const mockReports = [
        { id: '1', title: 'Test Report', location: 'Kitchen' }
      ];
      AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockReports));
      
      const reports = await ReportService.getAllReports();
      expect(reports).toEqual(mockReports);
    });
  });

  describe('saveReport', () => {
    it('saves a new report and returns its ID', async () => {
      AsyncStorage.getItem.mockResolvedValue('[]');
      AsyncStorage.setItem.mockResolvedValue(null);

      const newReport = {
        title: 'Kitchen Leak',
        location: 'Kitchen',
        description: 'Found leak under sink',
        leakDetected: true,
      };

      const reportId = await ReportService.saveReport(newReport);
      
      expect(reportId).toBeTruthy();
      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('deleteReport', () => {
    it('deletes a report by ID', async () => {
      const mockReports = [
        { id: '1', title: 'Report 1' },
        { id: '2', title: 'Report 2' },
      ];
      AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockReports));
      AsyncStorage.setItem.mockResolvedValue(null);

      await ReportService.deleteReport('1');

      expect(AsyncStorage.setItem).toHaveBeenCalled();
      const savedData = AsyncStorage.setItem.mock.calls[0][1];
      const parsedData = JSON.parse(savedData);
      expect(parsedData.length).toBe(1);
      expect(parsedData[0].id).toBe('2');
    });
  });

  describe('formatReportForSharing', () => {
    it('formats a report correctly for sharing', () => {
      const report = {
        title: 'Kitchen Inspection',
        location: 'Kitchen',
        description: 'Checked all fixtures',
        leakDetected: false,
        createdAt: new Date('2024-01-01').toISOString(),
        photos: ['photo1.jpg', 'photo2.jpg'],
        videos: ['video1.mp4'],
      };

      const formatted = ReportService.formatReportForSharing(report);
      
      expect(formatted).toContain('SAFE HOMECARE');
      expect(formatted).toContain('Kitchen Inspection');
      expect(formatted).toContain('Kitchen');
      expect(formatted).toContain('No Leak Detected');
      expect(formatted).toContain('2 attached');
      expect(formatted).toContain('1 attached');
    });

    it('handles leak detected status', () => {
      const report = {
        title: 'Bathroom Leak',
        location: 'Bathroom',
        leakDetected: true,
        createdAt: new Date().toISOString(),
      };

      const formatted = ReportService.formatReportForSharing(report);
      expect(formatted).toContain('LEAK DETECTED');
    });
  });
});
