import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ReportService from '../services/ReportService';

const CreateReport = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [leakDetected, setLeakDetected] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [customerEmail, setCustomerEmail] = useState('');

  const selectMedia = async type => {
    const options = {
      mediaType: type === 'photo' ? 'photo' : 'video',
      quality: 1,
    };

    Alert.alert('Select Media', 'Choose source', [
      {
        text: 'Camera',
        onPress: async () => {
          const result = await launchCamera(options);
          if (result.assets && result.assets.length > 0) {
            if (type === 'photo') {
              setPhotos([...photos, result.assets[0].uri]);
            } else {
              setVideos([...videos, result.assets[0].uri]);
            }
          }
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          const result = await launchImageLibrary(options);
          if (result.assets && result.assets.length > 0) {
            if (type === 'photo') {
              setPhotos([...photos, result.assets[0].uri]);
            } else {
              setVideos([...videos, result.assets[0].uri]);
            }
          }
        },
      },
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  const saveReport = async () => {
    if (!title || !location) {
      Alert.alert('Error', 'Please fill in title and location');
      return;
    }

    try {
      const report = {
        title,
        location,
        description,
        leakDetected,
        photos,
        videos,
        customerEmail,
        createdAt: new Date().toISOString(),
      };

      const reportId = await ReportService.saveReport(report);

      Alert.alert(
        'Success',
        'Report created successfully!',
        [
          {
            text: 'Share Now',
            onPress: async () => {
              await ReportService.shareReport(reportId);
              navigation.goBack();
            },
          },
          {
            text: 'Done',
            onPress: () => navigation.goBack(),
          },
        ],
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to create report: ' + error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Report Title *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Kitchen Sink Leak Inspection"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Location *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Kitchen, Bathroom, Basement"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Detailed description of the inspection or issue..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setLeakDetected(!leakDetected)}>
            <Text style={styles.checkboxText}>
              {leakDetected ? '☑' : '☐'} Leak Detected
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Customer Email (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="customer@example.com"
          value={customerEmail}
          onChangeText={setCustomerEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.mediaSection}>
          <Text style={styles.sectionTitle}>Media Documentation</Text>
          
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => selectMedia('photo')}>
            <Text style={styles.mediaButtonText}>
              📷 Add Photo ({photos.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => selectMedia('video')}>
            <Text style={styles.mediaButtonText}>
              🎥 Add Video ({videos.length})
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={saveReport}>
          <Text style={styles.saveButtonText}>Create Report</Text>
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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  checkboxContainer: {
    marginVertical: 15,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
  },
  mediaSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  mediaButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  mediaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateReport;
