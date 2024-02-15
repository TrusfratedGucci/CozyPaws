import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Correct import statement
import SignInComponents from './SignInScreen';
import PasswordChangedSuccessScreen from './PasswordChangedSuccessScreen';
import CongragulationsScreen from './CongragulationsScreen.js';
import NewPasswordComponents from './NewPasswordScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen 
            name="NewPasswordScreen" 
            component={NewPasswordComponents}
              options={{ title: '',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#F5F5DC' }, // Set the background color of the header // Align the title to the center
              headerLeft: () => ( // Add custom headerLeft component
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backButton}>
                              <Ionicons name="arrow-back" size={24} color="black" />
                            </View>                         
                          </TouchableOpacity>
                      )
            }} />
          <Stack.Screen 
            name="Congragulations" 
            component={CongragulationsScreen}
              options={{ title: '',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#F5F5DC' }, // Set the background color of the header // Align the title to the center
              headerLeft: () => ( // Add custom headerLeft component
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backButton}>
                              <Ionicons name="arrow-back" size={24} color="black" />
                            </View>                         
                          </TouchableOpacity>
                       
                      )
            }} />
            <Stack.Screen 
            name="PasswordChangedSuccess" 
            component={PasswordChangedSuccessScreen}
              options={{ title: '',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#F5F5DC' }, // Set the background color of the header // Align the title to the center
              headerLeft: () => ( // Add custom headerLeft component
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backButton}>
                              <Ionicons name="arrow-back" size={24} color="black" />
                            </View>                         
                          </TouchableOpacity>
                      )
            }} />
              <Stack.Screen  style={styles.header}
              name="SignIn" 
              component={SignInComponents} 
              options={{ title: '',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#F5F5DC' }, // Set the background color of the header // Align the title to the center
              headerLeft: () => ( // Add custom headerLeft component
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backButton}>
                              <Ionicons name="arrow-back" size={24} color="black" />
                            </View>                         
                          </TouchableOpacity>
                      )
            }} // Specify the custom header title here
              />
              
              {/* You need to import ForgotPassword component */}
              {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
          </Stack.Navigator>
      </NavigationContainer>
  );
};





const styles = StyleSheet.create({

  backButton: {
    // Adjust padding or margin as needed
    padding: 10, // Add padding around the back button
  },
});

export default App;
