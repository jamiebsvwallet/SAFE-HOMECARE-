/**
 * SAFE HOMECARE App Tests
 * Tests for core functionality
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Dashboard from '../src/screens/Dashboard';
import LeakDetectionReports from '../src/screens/LeakDetectionReports';
import CreateReport from '../src/screens/CreateReport';

// Note: import react-test-renderer with a TypeScript compiler
import renderer from 'react-test-renderer';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('SAFE HOMECARE App', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toBeTruthy();
  });
});

describe('Dashboard Component', () => {
  it('renders Dashboard correctly', () => {
    const tree = renderer.create(<Dashboard navigation={mockNavigation} />).toJSON();
    expect(tree).toBeTruthy();
  });

  it('contains key elements', () => {
    const tree = renderer.create(<Dashboard navigation={mockNavigation} />).toJSON();
    const stringified = JSON.stringify(tree);
    
    // Check for key text elements
    expect(stringified).toContain('Welcome to SAFE HOMECARE');
    expect(stringified).toContain('System Status');
  });
});

describe('LeakDetectionReports Component', () => {
  it('renders LeakDetectionReports correctly', () => {
    const tree = renderer.create(
      <LeakDetectionReports navigation={mockNavigation} />
    ).toJSON();
    expect(tree).toBeTruthy();
  });
});

describe('CreateReport Component', () => {
  it('renders CreateReport correctly', () => {
    const tree = renderer.create(
      <CreateReport navigation={mockNavigation} />
    ).toJSON();
    expect(tree).toBeTruthy();
  });

  it('contains form elements', () => {
    const tree = renderer.create(
      <CreateReport navigation={mockNavigation} />
    ).toJSON();
    const stringified = JSON.stringify(tree);
    
    // Check for form labels
    expect(stringified).toContain('Report Title');
    expect(stringified).toContain('Location');
    expect(stringified).toContain('Description');
  });
});
