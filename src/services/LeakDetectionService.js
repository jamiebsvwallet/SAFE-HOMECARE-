import PushNotification from 'react-native-push-notification';
import BleManager from 'react-native-ble-manager';
import {NativeModules, NativeEventEmitter} from 'react-native';

class LeakDetectionService {
  static instance = null;
  static alertSubscribers = [];
  static connectedDevices = [];
  static isInitialized = false;

  // Singleton pattern
  static getInstance() {
    if (!this.instance) {
      this.instance = new LeakDetectionService();
    }
    return this.instance;
  }

  // Initialize the service
  static async initialize() {
    if (this.isInitialized) {
      return;
    }

    try {
      // Initialize BLE Manager for sensor connections
      await BleManager.start({showAlert: false});
      console.log('BLE Manager initialized');

      // Configure push notifications
      PushNotification.configure({
        onRegister: function (token) {
          console.log('Push notification token:', token);
        },
        onNotification: function (notification) {
          console.log('Notification received:', notification);
        },
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
      });

      // Create notification channel for Android
      PushNotification.createChannel(
        {
          channelId: 'leak-alerts',
          channelName: 'Leak Detection Alerts',
          channelDescription: 'Notifications for leak detection alerts',
          importance: 4,
          vibrate: true,
        },
        created => console.log(`Channel created: ${created}`),
      );

      this.isInitialized = true;
      console.log('Leak Detection Service initialized');
    } catch (error) {
      console.error('Error initializing service:', error);
    }
  }

  // Subscribe to leak alerts
  static subscribeToAlerts(callback) {
    this.alertSubscribers.push(callback);

    // Return unsubscribe function
    return () => {
      this.alertSubscribers = this.alertSubscribers.filter(
        cb => cb !== callback,
      );
    };
  }

  // Notify all subscribers about a leak alert
  static notifyAlertSubscribers(alert) {
    this.alertSubscribers.forEach(callback => {
      try {
        callback(alert);
      } catch (error) {
        console.error('Error in alert subscriber:', error);
      }
    });
  }

  // Simulate leak detection (in production, this would connect to real sensors)
  static simulateLeakDetection(location) {
    const alert = {
      status: 'Leak Detected',
      location: location,
      timestamp: new Date().toISOString(),
      severity: 'high',
    };

    // Send push notification
    this.sendLeakAlert(alert);

    // Notify subscribers
    this.notifyAlertSubscribers(alert);

    return alert;
  }

  // Send leak alert notification
  static sendLeakAlert(alert) {
    PushNotification.localNotification({
      channelId: 'leak-alerts',
      title: '⚠️ Leak Detected!',
      message: `A leak has been detected at ${alert.location}. Please check immediately.`,
      playSound: true,
      soundName: 'default',
      importance: 'high',
      priority: 'high',
      vibrate: true,
      vibration: 300,
    });
  }

  // Connect to a leak detection sensor via Bluetooth
  static async connectToSensor(sensorId) {
    try {
      await BleManager.connect(sensorId);
      this.connectedDevices.push(sensorId);
      console.log('Connected to sensor:', sensorId);
      return true;
    } catch (error) {
      console.error('Error connecting to sensor:', error);
      return false;
    }
  }

  // Disconnect from a sensor
  static async disconnectFromSensor(sensorId) {
    try {
      await BleManager.disconnect(sensorId);
      this.connectedDevices = this.connectedDevices.filter(
        id => id !== sensorId,
      );
      console.log('Disconnected from sensor:', sensorId);
      return true;
    } catch (error) {
      console.error('Error disconnecting from sensor:', error);
      return false;
    }
  }

  // Get list of connected devices
  static async getConnectedDevices() {
    return this.connectedDevices.length;
  }

  // Scan for available sensors
  static async scanForSensors(scanDuration = 5) {
    try {
      await BleManager.scan([], scanDuration, false);
      console.log('Scanning for sensors...');
      return true;
    } catch (error) {
      console.error('Error scanning for sensors:', error);
      return false;
    }
  }

  // Get sensor data (mock implementation)
  static async getSensorData(sensorId) {
    // In production, this would read actual data from the sensor
    return {
      sensorId,
      temperature: 22 + Math.random() * 5,
      humidity: 40 + Math.random() * 20,
      waterDetected: Math.random() > 0.9, // 10% chance of water detection
      batteryLevel: 75 + Math.random() * 25,
      lastUpdate: new Date().toISOString(),
    };
  }

  // Check all connected sensors
  static async checkAllSensors() {
    const results = [];
    for (const sensorId of this.connectedDevices) {
      const data = await this.getSensorData(sensorId);
      results.push(data);

      // If water is detected, trigger alert
      if (data.waterDetected) {
        this.simulateLeakDetection(`Sensor ${sensorId}`);
      }
    }
    return results;
  }
}

export default LeakDetectionService;
