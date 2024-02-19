import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Correct import statement
import SignInComponents from './login_feature/SignInScreen';
import PasswordChangedSuccessScreen from './login_feature/PasswordChangedSuccessScreen';
import CongragulationsScreen from './login_feature/CongragulationsScreen.js';
import NewPasswordComponents from './login_feature/NewPasswordScreen.js';
import VerificationCodeComponents from './login_feature/VerificationCodeScreen.js';
import PetInfoFormComponents from './home_feature/PetInfoFormScreen.js';
import StartScreenComponents from './login_feature/StartScreen.js';
import SignUpComponents from './login_feature/SignUp.js';
import VerificationEmailComponents from './login_feature/VerificationEmail.js';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>


            <Stack.Screen 
                  name="VerificationEmail" 
                  component={VerificationEmailComponents}
                    options={({ navigation }) => ({
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                    headerLeft: () => ( // Add custom headerLeft component
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                  </View>                         
                                </TouchableOpacity>
                            )
                  })} />

            <Stack.Screen 
                    name="SignUp" 
                    component={SignUpComponents}
                      options={({ navigation }) => ({
                      title: '',
                      headerTitleAlign: 'center',
                      headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                      headerLeft: () => ( // Add custom headerLeft component
                                  <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={styles.backButton}>
                                    <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                    </View>                         
                                  </TouchableOpacity>
                              )
                    })} />

          

           <Stack.Screen 
                  name="StartScreen" 
                  component={StartScreenComponents}
                    options={({ navigation }) => ({
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#FF9029' }, 
                  })} /> 


            



            <Stack.Screen 
                name="VerificationCode" 
                component={VerificationCodeComponents}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} />



            <Stack.Screen 
                name="Congragulations" 
                component={CongragulationsScreen}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                </View>                         
                              </TouchableOpacity>
                          
                          )
                })} />


            <Stack.Screen 
                name="PasswordChangedSuccess" 
                component={PasswordChangedSuccessScreen}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} />

            <Stack.Screen 
                name="NewPasswordScreen" 
                component={NewPasswordComponents}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} /> 


            <Stack.Screen  style={styles.header}
                  name="SignIn" 
                  component={SignInComponents} 
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FF9029" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} // Specify the custom header title here
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
    padding: 20, // Add padding around the back button
  },
});

export default App;
