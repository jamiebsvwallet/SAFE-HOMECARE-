# SAFE HOMECARE

## ⚠️ IMPORTANT: To See the App with Colors & Styling
**This is documentation. To see the ACTUAL STYLED APP with colors and boxes, you must run it:**
```bash
npm install
npm run android  # or npm run ios
```
**See [IMPORTANT_READ_FIRST.md](IMPORTANT_READ_FIRST.md) if you're not seeing colors!**

---

SAFE HOME CARE is the complete leak detection and prevention program with 12 months cover. Safe Homecare is a specifically designed cover plan and platform combining all your plumbing, leak detection and maintenance needs under one cover whilst focusing on the prevention of any future leaks or damages to your home.

## Features

### 📊 Leak Detection Reports
- **Dashboard with Quick Access**: Click the "Leak Detection Reports" button from the main dashboard
- **Create Comprehensive Reports**: Document leak inspections with detailed information
- **Photo & Video Documentation**: Capture and attach photos and videos to reports
- **Share with Customers**: Send reports directly to customers via the app

### 🔔 AI Leak Detection System
- **Real-time Monitoring**: Connect AI-powered leak detection sensors via Bluetooth
- **Instant Alerts**: Receive immediate notifications when a leak is detected
- **Customer Notifications**: Customers also receive alerts through the app
- **Multi-Device Support**: Connect multiple sensors throughout the property

### 📱 Mobile App Features
- **Cross-Platform**: Works on Android and iOS devices
- **User-Friendly Interface**: Intuitive dashboard and navigation
- **Report Management**: View, edit, and delete reports
- **Sensor Management**: Add and manage connected leak detection devices
- **Push Notifications**: Real-time alerts for leak detection events

## Technology Stack

- **Framework**: React Native 0.72
- **Navigation**: React Navigation
- **Storage**: AsyncStorage for local data persistence
- **Bluetooth**: React Native BLE Manager for sensor connectivity
- **Media**: React Native Image Picker for photo/video capture
- **Notifications**: React Native Push Notification

## Project Structure

```
safe-homecare/
├── App.js                          # Main app component with navigation
├── index.js                        # App entry point
├── package.json                    # Dependencies and scripts
├── src/
│   ├── screens/
│   │   ├── Dashboard.js           # Main dashboard with system status
│   │   ├── LeakDetectionReports.js # View all reports
│   │   └── CreateReport.js        # Create new report with media
│   └── services/
│       ├── LeakDetectionService.js # AI sensor integration & alerts
│       └── ReportService.js       # Report management & sharing
└── android/                        # Android-specific configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development on Mac)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jamiebsvwallet/SAFE-HOMECARE-.git
   cd SAFE-HOMECARE-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies (Mac only)**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Start Metro Bundler
```bash
npm start
```

## App Usage

### 1. Dashboard
- View system status (Normal/Leak Detected)
- See connected device count
- Access all main features via buttons

### 2. Creating a Report
1. Click "Create New Report" from dashboard or reports screen
2. Fill in required information:
   - Report title
   - Location of inspection
   - Description of findings
   - Mark if leak was detected
3. Add photos and/or videos
4. Enter customer email (optional)
5. Click "Create Report"
6. Choose to share immediately or save for later

### 3. Managing Reports
- View all reports in chronological order
- Reports show status (leak detected or no leak)
- Share reports with customers
- Delete old reports

### 4. Leak Detection Sensors
- Connect AI sensors via Bluetooth
- Sensors monitor for water leaks 24/7
- Receive instant alerts when leak is detected
- Both service provider and customer get notifications

## Key Components

### LeakDetectionService
Handles all sensor connectivity and alert management:
- Bluetooth connection to sensors
- Real-time monitoring
- Push notification delivery
- Alert subscriber pattern for app-wide notifications

### ReportService
Manages report lifecycle:
- Create, read, update, delete operations
- Local storage with AsyncStorage
- Report formatting and sharing
- Customer communication

## Permissions

The app requires the following permissions:

**Android:**
- Camera (for photos/videos)
- Storage (for saving media)
- Bluetooth (for sensor connectivity)
- Location (required for Bluetooth scanning)
- Notifications (for leak alerts)

**iOS:**
- Camera
- Photo Library
- Bluetooth
- Notifications

## Future Enhancements

- Cloud backup for reports
- Customer portal/app for receiving reports
- Historical analytics and trends
- Multiple user accounts
- Integration with smart home systems
- Advanced AI leak prediction
- Water usage monitoring
- Maintenance scheduling

## Support

For issues, questions, or feature requests, please contact:
- Email: support@safehomecare.com
- Website: www.safehomecare.com

## License

See LICENSE file for details.

## About

SAFE HOMECARE provides comprehensive protection against water damage with professional monitoring, AI-powered detection, and complete documentation capabilities. Protect your home with our 12-month coverage program.
