import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Correct import statement
import SignInComponents from './login_feature/SignInScreen';
import PasswordChangedSuccessScreen from './login_feature/PasswordChangedSuccessScreen';
import CongratulationsScreen from './login_feature/CongratulationsScreen.js';
import NewPasswordComponents from './login_feature/NewPasswordScreen.js';
import VerificationCodeComponents from './login_feature/VerificationCodeScreen.js';
import StartScreenComponents from './login_feature/StartScreen.js';
import SignUpComponents from './login_feature/SignUp.js';
import VerificationEmailComponents from './login_feature/VerificationEmail.js';
import PetInfoFormComponents from './home_feature/PetInfoFormScreen.js';
import PetInfoScreen from './home_feature/PetInfoScreen.js';
import PetProfileScreen from './home_feature/PetProfileScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen
                name="PetProfile" 
                component={PetProfileScreen}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#649F95' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                </View>                         
                              </TouchableOpacity>
                          ),
                  headerTitle: () => (
                            <View>
                              <Image source={require('./assets/chubby.jpg')} style={styles.profilePic} />
                              <Text style = {styles.headerText}>Pet Name</Text>
                            </View>
                          ),
                })}/>



            <Stack.Screen
                name="PetInfo" 
                component={PetInfoScreen}
                  options={({ navigation }) => ({
                  title: '',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#649F95' }, // Set the background color of the header // Align the title to the center
                  headerLeft: () => ( // Add custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })}/>

             <Stack.Screen 
                    name="PetInfoForm" 
                    component={PetInfoFormComponents}
                      options={({ navigation }) => ({
                      title: 'Create Pet Profile',
                      headerTitleAlign: 'center',
                      headerTintColor: '#FFFFFF', // Change the text color of the header title
                      headerStyle: { backgroundColor: '#649F95' }, // Set the background color of the header // Align the title to the center
                      headerLeft: () => ( // Add custom headerLeft component
                                  <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={styles.backButton}>
                                    <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                    </View>                         
                                  </TouchableOpacity>
                              )
                    })} /> 


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
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
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
                                    <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
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
                    headerStyle: { backgroundColor: '#FF8D4D' }, 
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
                                <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} />



            <Stack.Screen 
                name="Congragulations" 
                component={CongratulationsScreen}
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
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
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
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
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
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} 
                  />

          </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  backButton: {
    // Adjust padding or margin as needed
    padding: 20, // Add padding around the back button
  },

  petInfoBackButton: {
    // Adjust padding or margin as needed
    padding: 20, // Add padding around the back button
    paddingBottom:120,
  },

  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 90,
    bottom: -45,
    marginLeft: 215,
  },

  headerText: {
    marginLeft: 105,
    bottom: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});

export default App;
