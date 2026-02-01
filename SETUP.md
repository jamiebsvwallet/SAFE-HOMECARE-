# SAFE HOMECARE - Setup Guide

## Complete Installation Instructions

### System Requirements

#### For Development
- **Node.js**: v16.0 or higher
- **npm**: v8.0 or higher (or yarn)
- **Operating System**: 
  - Windows 10/11
  - macOS 10.15 or higher
  - Linux (Ubuntu 18.04 or higher)

#### For Android Development
- **Android Studio**: Latest version
- **Android SDK**: API Level 31 or higher
- **Java Development Kit**: JDK 11 or higher
- **Android Device/Emulator**: Running Android 8.0 (API 26) or higher

#### For iOS Development (Mac only)
- **Xcode**: 12.0 or higher
- **CocoaPods**: Latest version
- **iOS Simulator or Device**: iOS 12.0 or higher

### Step-by-Step Installation

#### 1. Install Node.js and npm
Download and install from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

#### 2. Install React Native CLI
```bash
npm install -g react-native-cli
```

#### 3. Clone the Repository
```bash
git clone https://github.com/jamiebsvwallet/SAFE-HOMECARE-.git
cd SAFE-HOMECARE-
```

#### 4. Install Project Dependencies
```bash
npm install
```

#### 5. Android Setup

**Install Android Studio:**
1. Download from [developer.android.com](https://developer.android.com/studio)
2. Install Android SDK, SDK Platform, and Android Virtual Device
3. Set up environment variables:
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

**Create Android Build:**
```bash
cd android
./gradlew clean
cd ..
```

#### 6. iOS Setup (Mac only)

**Install Xcode:**
1. Download from App Store
2. Install Command Line Tools:
   ```bash
   xcode-select --install
   ```

**Install CocoaPods:**
```bash
sudo gem install cocoapods
```

**Install iOS Dependencies:**
```bash
cd ios
pod install
cd ..
```

### Running the Application

#### Start Metro Bundler
In a terminal window:
```bash
npm start
```

#### Run on Android
In another terminal:
```bash
npm run android
```

Or using Android Studio:
1. Open `android` folder in Android Studio
2. Click "Run" button

#### Run on iOS (Mac only)
```bash
npm run ios
```

Or using Xcode:
1. Open `ios/SafeHomecare.xcworkspace` in Xcode
2. Select target device/simulator
3. Click "Play" button

### Troubleshooting

#### Common Issues

**1. Metro Bundler Issues**
```bash
# Clear cache and restart
npm start -- --reset-cache
```

**2. Android Build Errors**
```bash
# Clean and rebuild
cd android
./gradlew clean
./gradlew assembleDebug
cd ..
```

**3. iOS Pod Installation Issues**
```bash
# Update and reinstall pods
cd ios
pod deintegrate
pod install
cd ..
```

**4. Permission Errors on Android**
- Go to device Settings > Apps > Safe Homecare
- Enable all requested permissions manually

**5. Bluetooth Not Working**
- Ensure location services are enabled (required for BLE on Android)
- Check that Bluetooth permissions are granted
- Make sure Bluetooth is turned on

### Development Tips

#### Hot Reloading
- Press `r` in Metro Bundler to reload
- Press `d` to open developer menu
- Shake device to open developer menu on physical device

#### Debugging
```bash
# Enable debug mode
# Android: Shake device or press Cmd+M (Mac) / Ctrl+M (Windows/Linux)
# iOS: Shake device or press Cmd+D

# View logs
# Android:
adb logcat

# iOS:
# Use Xcode console or:
react-native log-ios
```

#### Building for Production

**Android:**
```bash
cd android
./gradlew assembleRelease
# APK located at: android/app/build/outputs/apk/release/
```

**iOS:**
1. Open Xcode
2. Select "Generic iOS Device"
3. Product > Archive
4. Follow distribution steps

### Hardware Requirements

#### AI Leak Detection Sensors
- **Bluetooth**: BLE 4.0 or higher
- **Operating Range**: Up to 30 meters (100 feet)
- **Battery**: CR2032 or rechargeable (sensor dependent)
- **Water Resistance**: IP67 rated
- **Detection Method**: Capacitive water sensing

#### Recommended Sensors
- Safe Homecare AI Sensor (Official)
- Compatible BLE water leak sensors
- Smart home integration sensors

### Configuration

#### Environment Variables
Create a `.env` file in the root directory:
```
API_URL=https://api.safehomecare.com
NOTIFICATION_KEY=your_notification_key
BLE_SERVICE_UUID=your_service_uuid
```

#### App Configuration
Edit `app.json` to customize:
- App name
- Display name
- Version
- Bundle identifier

### Next Steps

After successful installation:
1. Create your first leak detection report
2. Connect AI sensors via Bluetooth
3. Configure notification preferences
4. Test alert functionality
5. Share reports with customers

### Support

If you encounter issues:
1. Check the troubleshooting section
2. Review logs for error messages
3. Visit our documentation at docs.safehomecare.com
4. Contact support@safehomecare.com

## Updates

Check for updates regularly:
```bash
git pull origin main
npm install
# For iOS:
cd ios && pod install && cd ..
```

### Version History
- **v1.0.0** - Initial release with core features
  - Dashboard with system status
  - Leak detection reports
  - Photo/video documentation
  - AI sensor integration
  - Push notifications
