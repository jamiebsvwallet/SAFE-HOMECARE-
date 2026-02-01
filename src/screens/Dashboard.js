import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import LeakDetectionService from '../services/LeakDetectionService';

const Dashboard = ({navigation}) => {
  const [leakStatus, setLeakStatus] = useState('Normal');
  const [connectedDevices, setConnectedDevices] = useState(0);

  useEffect(() => {
    // Initialize leak detection service
    LeakDetectionService.initialize();

    // Subscribe to leak alerts
    const unsubscribe = LeakDetectionService.subscribeToAlerts(alert => {
      setLeakStatus(alert.status);
      if (alert.status === 'Leak Detected') {
        Alert.alert(
          'Leak Detected!',
          `A leak has been detected at ${alert.location}. Please check immediately.`,
          [
            {
              text: 'View Details',
              onPress: () => navigation.navigate('LeakDetectionReports'),
            },
            {text: 'OK'},
          ],
        );
      }
    });

    // Get connected devices count
    LeakDetectionService.getConnectedDevices().then(count => {
      setConnectedDevices(count);
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Blue Header Box */}
      <View style={styles.blueHeaderBox}>
        <Text style={styles.mainTitle}>SAFE HOMECARE APP</Text>
        <Text style={styles.introText}>
          Introducing Safe Homecare... The complete Leak detection and Prevention 
          program with 12 months cover. The fastest way to a Leak free Home.
        </Text>
      </View>

      {/* What is Safe Homecare Section */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>WHAT IS SAFE HOMECARE?</Text>
        <Text style={styles.sectionText}>
          Safe Homecare is a specifically designed cover plan and platform 
          combining all your plumbing, leak detection and maintenance needs under 
          one cover whilst focusing on the prevention of any future Leaks or 
          damages to your home.
        </Text>
      </View>

      {/* How is this Achieved Section */}
      <View style={styles.howSection}>
        <Text style={styles.howTitle}>HOW IS THIS ACHIEVED?</Text>
        
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletText}>•</Text>
          <Text style={styles.bulletContent}>
            Initial annual full property survey to locate and rectify any present 
            or potential leaks. Ensuring a leak free home on completion.
          </Text>
        </View>

        <View style={styles.bulletPoint}>
          <Text style={styles.bulletText}>•</Text>
          <Text style={styles.bulletContent}>
            Our engineers will install a leak prevention and water consumption 
            device that will automatically shut off the water supply when a leak 
            is detected, in which an alert will be activated on your app alerting 
            you of a leak, allowing you to act quickly and monitor your water 
            consumption and control spending.
          </Text>
        </View>

        <View style={styles.bulletPoint}>
          <Text style={styles.bulletText}>•</Text>
          <Text style={styles.bulletContent}>
            Maintaining the property throughout 12 months cover with any needed 
            maintenance works undertaken for any potential water related issues.
          </Text>
        </View>

        <View style={styles.bulletPoint}>
          <Text style={styles.bulletText}>•</Text>
          <Text style={styles.bulletContent}>
            The ability to work alongside utility and insurance companies if 
            needed for faster responses, saving time, expenses and damages.
          </Text>
        </View>
      </View>

      {/* Video Placeholder Box */}
      <View style={styles.videoBox}>
        <Text style={styles.videoPlaceholderText}>Video Content Area</Text>
        <Text style={styles.videoSubtext}>Video will be displayed here</Text>
      </View>

      {/* System Status Card */}
      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>System Status</Text>
        <Text
          style={[
            styles.statusValue,
            leakStatus === 'Leak Detected' && styles.statusAlert,
          ]}>
          {leakStatus}
        </Text>
        <Text style={styles.deviceCount}>
          {connectedDevices} Device(s) Connected
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('LeakDetectionReports')}>
          <Text style={styles.buttonText}>📊 Leak Detection Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('CreateReport')}>
          <Text style={styles.buttonText}>📝 Create New Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            Alert.alert(
              'Sensor Management',
              'Add or manage your AI leak detection sensors',
            );
          }}>
          <Text style={styles.buttonText}>🔧 Manage Sensors</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            Alert.alert(
              'Alert Settings',
              'Configure notification preferences',
            );
          }}>
          <Text style={styles.buttonText}>🔔 Alert Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  // Blue Header Box
  blueHeaderBox: {
    backgroundColor: '#2196F3',
    padding: 25,
    paddingTop: 30,
    paddingBottom: 30,
    margin: 0,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  // What is Safe Homecare Section
  infoSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  // How is this Achieved Section
  howSection: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  howTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
    textAlign: 'center',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
    marginTop: 2,
  },
  bulletContent: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  // Video Box
  videoBox: {
    backgroundColor: '#f0f0f0',
    margin: 15,
    marginTop: 0,
    padding: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2196F3',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    elevation: 2,
  },
  videoPlaceholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  videoSubtext: {
    fontSize: 14,
    color: '#666',
  },
  // Status Card
  statusCard: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  statusValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  statusAlert: {
    color: '#F44336',
  },
  deviceCount: {
    fontSize: 14,
    color: '#999',
  },
  // Buttons
  buttonContainer: {
    padding: 15,
    paddingTop: 0,
  },
  primaryButton: {
    backgroundColor: '#2196F3',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  secondaryButton: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Dashboard;
