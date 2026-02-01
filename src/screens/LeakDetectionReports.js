import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ReportService from '../services/ReportService';

const LeakDetectionReports = ({navigation}) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const allReports = await ReportService.getAllReports();
    setReports(allReports);
  };

  const shareReport = async reportId => {
    try {
      await ReportService.shareReport(reportId);
      Alert.alert('Success', 'Report shared with customer successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to share report: ' + error.message);
    }
  };

  const deleteReport = async reportId => {
    Alert.alert(
      'Delete Report',
      'Are you sure you want to delete this report?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await ReportService.deleteReport(reportId);
            loadReports();
          },
        },
      ],
    );
  };

  const renderReportItem = ({item}) => (
    <View style={styles.reportCard}>
      <View style={styles.reportHeader}>
        <Text style={styles.reportTitle}>{item.title}</Text>
        <Text
          style={[
            styles.reportStatus,
            item.leakDetected && styles.reportStatusAlert,
          ]}>
          {item.leakDetected ? '⚠️ Leak Detected' : '✓ No Leak'}
        </Text>
      </View>

      <Text style={styles.reportDate}>
        Date: {new Date(item.createdAt).toLocaleString()}
      </Text>
      <Text style={styles.reportLocation}>Location: {item.location}</Text>
      <Text style={styles.reportDescription}>{item.description}</Text>

      {item.photos && item.photos.length > 0 && (
        <Text style={styles.reportMedia}>
          📷 {item.photos.length} Photo(s)
        </Text>
      )}
      {item.videos && item.videos.length > 0 && (
        <Text style={styles.reportMedia}>
          🎥 {item.videos.length} Video(s)
        </Text>
      )}

      <View style={styles.reportActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => shareReport(item.id)}>
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => deleteReport(item.id)}>
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Reports</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreateReport')}>
          <Text style={styles.createButtonText}>+ New Report</Text>
        </TouchableOpacity>
      </View>

      {reports.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No reports yet</Text>
          <Text style={styles.emptySubtext}>
            Create your first leak detection report
          </Text>
        </View>
      ) : (
        <FlatList
          data={reports}
          renderItem={renderReportItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  createButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 15,
  },
  reportCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  reportStatus: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  reportStatusAlert: {
    color: '#F44336',
  },
  reportDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  reportLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  reportDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  reportMedia: {
    fontSize: 12,
    color: '#2196F3',
    marginBottom: 3,
  },
  reportActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 5,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default LeakDetectionReports;
