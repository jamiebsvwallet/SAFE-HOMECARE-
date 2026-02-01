/**
 * Tests for LeakDetectionService
 */

import LeakDetectionService from '../src/services/LeakDetectionService';

// Mock the react-native modules
jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  createChannel: jest.fn(),
  localNotification: jest.fn(),
}));

jest.mock('react-native-ble-manager', () => ({
  start: jest.fn(() => Promise.resolve()),
  connect: jest.fn(() => Promise.resolve()),
  disconnect: jest.fn(() => Promise.resolve()),
  scan: jest.fn(() => Promise.resolve()),
}));

describe('LeakDetectionService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    LeakDetectionService.isInitialized = false;
    LeakDetectionService.alertSubscribers = [];
    LeakDetectionService.connectedDevices = [];
  });

  describe('initialize', () => {
    it('initializes the service successfully', async () => {
      await LeakDetectionService.initialize();
      expect(LeakDetectionService.isInitialized).toBe(true);
    });

    it('does not initialize twice', async () => {
      await LeakDetectionService.initialize();
      const firstInit = LeakDetectionService.isInitialized;
      
      await LeakDetectionService.initialize();
      expect(firstInit).toBe(true);
      expect(LeakDetectionService.isInitialized).toBe(true);
    });
  });

  describe('subscribeToAlerts', () => {
    it('adds a subscriber and returns unsubscribe function', () => {
      const mockCallback = jest.fn();
      const unsubscribe = LeakDetectionService.subscribeToAlerts(mockCallback);
      
      expect(LeakDetectionService.alertSubscribers.length).toBe(1);
      
      unsubscribe();
      expect(LeakDetectionService.alertSubscribers.length).toBe(0);
    });
  });

  describe('simulateLeakDetection', () => {
    it('creates a leak alert with correct properties', () => {
      const location = 'Kitchen';
      const alert = LeakDetectionService.simulateLeakDetection(location);
      
      expect(alert.status).toBe('Leak Detected');
      expect(alert.location).toBe(location);
      expect(alert.severity).toBe('high');
      expect(alert.timestamp).toBeTruthy();
    });

    it('notifies subscribers when leak is detected', () => {
      const mockCallback = jest.fn();
      LeakDetectionService.subscribeToAlerts(mockCallback);
      
      LeakDetectionService.simulateLeakDetection('Bathroom');
      
      expect(mockCallback).toHaveBeenCalled();
      expect(mockCallback.mock.calls[0][0].status).toBe('Leak Detected');
    });
  });

  describe('getConnectedDevices', () => {
    it('returns the count of connected devices', async () => {
      LeakDetectionService.connectedDevices = ['sensor1', 'sensor2'];
      const count = await LeakDetectionService.getConnectedDevices();
      expect(count).toBe(2);
    });

    it('returns 0 when no devices connected', async () => {
      const count = await LeakDetectionService.getConnectedDevices();
      expect(count).toBe(0);
    });
  });

  describe('getSensorData', () => {
    it('returns mock sensor data', async () => {
      const sensorId = 'test-sensor-1';
      const data = await LeakDetectionService.getSensorData(sensorId);
      
      expect(data.sensorId).toBe(sensorId);
      expect(data.temperature).toBeDefined();
      expect(data.humidity).toBeDefined();
      expect(data.waterDetected).toBeDefined();
      expect(data.batteryLevel).toBeDefined();
      expect(data.lastUpdate).toBeDefined();
    });
  });
});
