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
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to SAFE HOMECARE</Text>
        <Text style={styles.subtitle}>
          Your complete leak detection and prevention program
        </Text>
      </View>

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

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>About SAFE HOMECARE</Text>
        <Text style={styles.infoText}>
          Safe Homecare combines all your plumbing, leak detection, and
          maintenance needs under one platform. Our AI-powered sensors provide
          24/7 monitoring to prevent water damage and keep your home safe.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  statusCard: {
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
  buttonContainer: {
    padding: 15,
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
  infoCard: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 5,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default Dashboard;
