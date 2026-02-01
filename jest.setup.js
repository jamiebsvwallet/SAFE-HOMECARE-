// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

// Mock react-native modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mock react-native-image-picker
jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
}));

// Mock react-native-push-notification
jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  createChannel: jest.fn(),
  localNotification: jest.fn(),
}));

// Mock react-native-ble-manager
jest.mock('react-native-ble-manager', () => ({
  start: jest.fn(() => Promise.resolve()),
  connect: jest.fn(() => Promise.resolve()),
  disconnect: jest.fn(() => Promise.resolve()),
  scan: jest.fn(() => Promise.resolve()),
}));

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.alert = jest.fn();
