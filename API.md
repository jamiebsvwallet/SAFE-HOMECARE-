# SAFE HOMECARE - API Documentation

## Services API Reference

### ReportService

Service for managing leak detection reports.

#### Methods

##### `getAllReports()`
Retrieves all stored reports.

**Returns:** `Promise<Array<Report>>`

**Example:**
```javascript
const reports = await ReportService.getAllReports();
```

##### `saveReport(report)`
Saves a new report to storage.

**Parameters:**
- `report` (Object): Report data
  - `title` (string): Report title
  - `location` (string): Location of inspection
  - `description` (string): Detailed description
  - `leakDetected` (boolean): Whether leak was detected
  - `photos` (Array<string>): Photo URIs
  - `videos` (Array<string>): Video URIs
  - `customerEmail` (string): Customer email
  - `createdAt` (string): ISO date string

**Returns:** `Promise<string>` - Report ID

**Example:**
```javascript
const reportId = await ReportService.saveReport({
  title: 'Kitchen Sink Inspection',
  location: 'Kitchen',
  description: 'Checked under sink for leaks',
  leakDetected: false,
  photos: ['/path/to/photo.jpg'],
  videos: [],
  customerEmail: 'customer@email.com',
  createdAt: new Date().toISOString()
});
```

##### `deleteReport(reportId)`
Deletes a report by ID.

**Parameters:**
- `reportId` (string): ID of report to delete

**Returns:** `Promise<void>`

**Example:**
```javascript
await ReportService.deleteReport('123456789');
```

##### `shareReport(reportId)`
Shares a report with customer.

**Parameters:**
- `reportId` (string): ID of report to share

**Returns:** `Promise<boolean>` - Success status

**Example:**
```javascript
const success = await ReportService.shareReport('123456789');
```

##### `getReportById(reportId)`
Retrieves a specific report by ID.

**Parameters:**
- `reportId` (string): ID of report

**Returns:** `Promise<Report|null>`

**Example:**
```javascript
const report = await ReportService.getReportById('123456789');
```

---

### LeakDetectionService

Service for managing AI leak detection sensors and alerts.

#### Methods

##### `initialize()`
Initializes the leak detection service, BLE manager, and push notifications.

**Returns:** `Promise<void>`

**Example:**
```javascript
await LeakDetectionService.initialize();
```

##### `subscribeToAlerts(callback)`
Subscribe to leak detection alerts.

**Parameters:**
- `callback` (Function): Called when alert occurs
  - `alert` (Object): Alert data
    - `status` (string): Alert status
    - `location` (string): Location of leak
    - `timestamp` (string): ISO date string
    - `severity` (string): Alert severity level

**Returns:** `Function` - Unsubscribe function

**Example:**
```javascript
const unsubscribe = LeakDetectionService.subscribeToAlerts((alert) => {
  console.log('Leak detected at:', alert.location);
});

// Later, to unsubscribe:
unsubscribe();
```

##### `simulateLeakDetection(location)`
Simulates a leak detection at specified location (for testing).

**Parameters:**
- `location` (string): Location where leak is detected

**Returns:** `Object` - Alert object

**Example:**
```javascript
const alert = LeakDetectionService.simulateLeakDetection('Kitchen');
```

##### `connectToSensor(sensorId)`
Connects to a leak detection sensor via Bluetooth.

**Parameters:**
- `sensorId` (string): Bluetooth device ID

**Returns:** `Promise<boolean>` - Connection success

**Example:**
```javascript
const connected = await LeakDetectionService.connectToSensor('SENSOR-001');
```

##### `disconnectFromSensor(sensorId)`
Disconnects from a sensor.

**Parameters:**
- `sensorId` (string): Bluetooth device ID

**Returns:** `Promise<boolean>` - Disconnection success

**Example:**
```javascript
await LeakDetectionService.disconnectFromSensor('SENSOR-001');
```

##### `getConnectedDevices()`
Gets the number of currently connected sensors.

**Returns:** `Promise<number>` - Device count

**Example:**
```javascript
const count = await LeakDetectionService.getConnectedDevices();
console.log(`${count} sensors connected`);
```

##### `scanForSensors(scanDuration)`
Scans for available leak detection sensors.

**Parameters:**
- `scanDuration` (number): Scan duration in seconds (default: 5)

**Returns:** `Promise<boolean>` - Scan success

**Example:**
```javascript
await LeakDetectionService.scanForSensors(10);
```

##### `getSensorData(sensorId)`
Retrieves current data from a sensor.

**Parameters:**
- `sensorId` (string): Sensor identifier

**Returns:** `Promise<Object>` - Sensor data
- `sensorId` (string)
- `temperature` (number): Temperature in Celsius
- `humidity` (number): Humidity percentage
- `waterDetected` (boolean): Water detection status
- `batteryLevel` (number): Battery percentage
- `lastUpdate` (string): ISO date string

**Example:**
```javascript
const data = await LeakDetectionService.getSensorData('SENSOR-001');
console.log(`Battery: ${data.batteryLevel}%`);
console.log(`Water detected: ${data.waterDetected}`);
```

##### `checkAllSensors()`
Checks all connected sensors for leaks.

**Returns:** `Promise<Array<Object>>` - Array of sensor data

**Example:**
```javascript
const results = await LeakDetectionService.checkAllSensors();
results.forEach(sensor => {
  if (sensor.waterDetected) {
    console.log(`Leak at sensor ${sensor.sensorId}`);
  }
});
```

---

## Data Models

### Report Object
```javascript
{
  id: string,              // Unique identifier
  title: string,           // Report title
  location: string,        // Location of inspection
  description: string,     // Detailed description
  leakDetected: boolean,   // Leak detection status
  photos: Array<string>,   // Array of photo URIs
  videos: Array<string>,   // Array of video URIs
  customerEmail: string,   // Customer email
  createdAt: string       // ISO date string
}
```

### Alert Object
```javascript
{
  status: string,          // 'Normal' or 'Leak Detected'
  location: string,        // Location of alert
  timestamp: string,       // ISO date string
  severity: string        // 'low', 'medium', 'high'
}
```

### SensorData Object
```javascript
{
  sensorId: string,        // Sensor identifier
  temperature: number,     // Temperature in Celsius
  humidity: number,        // Humidity percentage
  waterDetected: boolean,  // Water detection status
  batteryLevel: number,    // Battery percentage (0-100)
  lastUpdate: string      // ISO date string
}
```

---

## Navigation Structure

### Screen Routes

#### Dashboard
- **Route name:** `Dashboard`
- **Component:** `Dashboard`
- **Description:** Main screen with system status and navigation

#### LeakDetectionReports
- **Route name:** `LeakDetectionReports`
- **Component:** `LeakDetectionReports`
- **Description:** List of all reports

#### CreateReport
- **Route name:** `CreateReport`
- **Component:** `CreateReport`
- **Description:** Form to create new report

### Navigation Methods

```javascript
// Navigate to reports
navigation.navigate('LeakDetectionReports');

// Navigate to create report
navigation.navigate('CreateReport');

// Go back
navigation.goBack();
```

---

## Storage

### AsyncStorage Keys

- `@safe_homecare_reports` - Stores all reports as JSON array

### Data Persistence

All reports are stored locally using AsyncStorage. Data persists across app restarts.

---

## Permissions Required

### Android
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### iOS (Info.plist)
```xml
<key>NSCameraUsageDescription</key>
<string>We need camera access to take photos for reports</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>We need photo library access to attach photos to reports</string>
<key>NSBluetoothAlwaysUsageDescription</key>
<string>We need Bluetooth to connect to leak detection sensors</string>
```

---

## Error Handling

All service methods include try-catch blocks for error handling. Errors are logged to console and thrown for calling code to handle.

**Example error handling:**
```javascript
try {
  await ReportService.saveReport(reportData);
  Alert.alert('Success', 'Report saved!');
} catch (error) {
  Alert.alert('Error', 'Failed to save: ' + error.message);
}
```

---

## Best Practices

1. **Always initialize LeakDetectionService** before using leak detection features
2. **Unsubscribe from alerts** when component unmounts
3. **Handle permissions** before accessing camera or Bluetooth
4. **Validate data** before saving reports
5. **Check connection status** before interacting with sensors
6. **Provide user feedback** for all async operations

---

## Example Usage

### Complete Report Creation Flow

```javascript
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import ReportService from './services/ReportService';

const CreateReportExample = () => {
  const [photos, setPhotos] = useState([]);
  
  const takePhoto = async () => {
    const result = await launchCamera({mediaType: 'photo', quality: 1});
    if (result.assets) {
      setPhotos([...photos, result.assets[0].uri]);
    }
  };
  
  const saveReport = async () => {
    try {
      const report = {
        title: 'Kitchen Inspection',
        location: 'Kitchen',
        description: 'Routine inspection',
        leakDetected: false,
        photos: photos,
        videos: [],
        customerEmail: 'customer@email.com',
        createdAt: new Date().toISOString()
      };
      
      const reportId = await ReportService.saveReport(report);
      await ReportService.shareReport(reportId);
      
      Alert.alert('Success', 'Report created and shared!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  
  return (
    // UI components here
  );
};
```

### Complete Sensor Integration Flow

```javascript
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import LeakDetectionService from './services/LeakDetectionService';

const SensorMonitoring = () => {
  const [status, setStatus] = useState('Normal');
  
  useEffect(() => {
    // Initialize service
    LeakDetectionService.initialize();
    
    // Subscribe to alerts
    const unsubscribe = LeakDetectionService.subscribeToAlerts((alert) => {
      setStatus(alert.status);
      if (alert.status === 'Leak Detected') {
        Alert.alert('Leak Alert!', `Detected at ${alert.location}`);
      }
    });
    
    // Connect to sensor
    connectSensor();
    
    return () => unsubscribe();
  }, []);
  
  const connectSensor = async () => {
    try {
      await LeakDetectionService.scanForSensors(5);
      const connected = await LeakDetectionService.connectToSensor('SENSOR-001');
      if (connected) {
        Alert.alert('Connected', 'Sensor connected successfully');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to sensor');
    }
  };
  
  return (
    // UI components here
  );
};
```

---

For more information, see the User Guide and Setup documentation.
