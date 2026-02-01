import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './src/screens/Dashboard';
import LeakDetectionReports from './src/screens/LeakDetectionReports';
import CreateReport from './src/screens/CreateReport';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'SAFE HOMECARE'}}
        />
        <Stack.Screen
          name="LeakDetectionReports"
          component={LeakDetectionReports}
          options={{title: 'Leak Detection Reports'}}
        />
        <Stack.Screen
          name="CreateReport"
          component={CreateReport}
          options={{title: 'Create Report'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
