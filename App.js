import { decode } from 'base-64';
global.atob = decode;



import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Correct import statement
import SignInComponents from './login_feature/SignInScreen';
import CongratulationsScreen from './login_feature/CongratulationsScreen.js';
import PasswordChangedSuccessScreen from './login_feature/PasswordChangedSuccessScreen.js'
import NewPasswordComponents from './login_feature/NewPasswordScreen.js';
import VerificationCodeComponents from './login_feature/VerificationCodeScreen.js';
import StartScreenComponents from './login_feature/StartScreen.js';
import SignUpComponents from './login_feature/SignUp.js';
import VerificationEmailComponents from './login_feature/VerificationEmail.js';
import PetInfoFormComponents from './home_feature/PetInfoFormScreen.js';
import PetInfoScreen from './home_feature/PetInfoScreen.js';
import PetInfoEditComponents from './home_feature/petInfoEditScreen.js';
import PetProfileScreen from './home_feature/PetProfileScreen.js';
import AddPetComponents from './home_feature/AddPetProfile.js';
import Vaccines from './vaccination_feature/VaccineListScreen.js';
import FirstAidTips from './firstAidTips_feature/firstAidTips.js';
import TrainingTips from './trainingTips_feature/trainingTips.js';
import GoWithPet from './goWithPet_feature/goWithPetScreen.js';
import HeatTrackerScreen from './heat_tracker_feature/HeatTrackerScreen.js';
import MedicalHistory from './medical_history_feature/medical_history_screen.js';
import CreateHistory from './medical_history_feature/create_history_screen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen">

          <Stack.Screen 
                  name="StartScreen" 
                  component={StartScreenComponents}
                    options={({ navigation }) => ({
                    title: 'StartScreen',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#FF8D4D' }, 
                    headerShown: false,
                  })} /> 

                  
          <Stack.Screen 
                name="Congratulations" 
                component={CongratulationsScreen}
                  options={({ navigation }) => ({
                  title: 'Congratulations',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, 
                  headerShown: false,
                  headerLeft: () => ( // Custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                </View>                         
                              </TouchableOpacity>
                          
                          )
                })} />

          <Stack.Screen 
                  name="VerificationEmail" 
                  component={VerificationEmailComponents}
                    options={({ navigation }) => ({
                    title: 'VerificationEmail',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'white' }, 
                    headerShown: false,
                    headerLeft: () => ( // Custom headerLeft component
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
                      title: 'SignUp',
                      headerTitleAlign: 'center',
                      headerStyle: { backgroundColor: 'white' },
                      headerShown: false,
                      headerLeft: () => ( // Custom headerLeft component
                                  <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={styles.backButton}>
                                    <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                    </View>                         
                                  </TouchableOpacity>
                              )
                    })} />

            

            <Stack.Screen 
                name="VerificationCode" 
                component={VerificationCodeComponents}
                  options={({ navigation }) => ({
                  title: 'VerificationCode',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, 
                  headerShown: false,
                  headerLeft: () => ( // Custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} />

            <Stack.Screen 
                name="PasswordChangedSuccess" 
                component={PasswordChangedSuccessScreen}
                  options={({ navigation }) => ({
                  title: 'PasswordChangedSuccess',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, 
                  headerShown: false,
                  headerLeft: () => ( // Custom headerLeft component
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
                  title: 'NewPasswordScreen',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, 
                  headerShown: false,
                  headerLeft: () => ( // Custom headerLeft component
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
                  title: 'SignIn',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: 'white' }, 
                  headerShown: false,
                  headerLeft: () => ( // Custom headerLeft component
                              <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="#305C55" />
                                </View>                         
                              </TouchableOpacity>
                          )
                })} 
                  />


                <Stack.Screen 
                    name="AddPet" 
                    component={AddPetComponents}
                      options={({ navigation }) => ({
                      title: 'Add Pet Profile',
                      headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 


          <Stack.Screen
                name="PetProfile" 
                component={PetProfileScreen}
                  options={({ navigation }) => ({
                  title: 'Pet Profile',
                  headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 



            <Stack.Screen
                name="PetInfo" 
                component={PetInfoScreen}
                  options={({ navigation }) => ({
                  title: 'Pet Details',
                  headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 

             <Stack.Screen 
                    name="PetInfoForm" 
                    component={PetInfoFormComponents}
                      options={({ navigation }) => ({
                      title: 'Create Pet Profile',
                      headerTitleAlign: 'center',
                      headerTintColor: '#FFFFFF', // Change the text color of the header title
                      headerStyle: { backgroundColor: '#649F95',height: 100,},
                      headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                          headerLeft: () => ( // Add custom headerLeft component
                                      <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <View style={styles.backButton}>
                                        <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                        </View>                         
                                      </TouchableOpacity>
                                  )
                        })} /> 



              <Stack.Screen 
                    name="PetInfoEdit" 
                    component={PetInfoEditComponents}
                      options={({ navigation }) => ({
                      title: 'Update Pet Profile',
                      headerTitleAlign: 'center',
                      headerTintColor: '#FFFFFF', // Change the text color of the header title
                      headerStyle: { backgroundColor: '#649F95',height: 100,},
                      headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                          headerLeft: () => ( // Add custom headerLeft component
                                      <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <View style={styles.backButton}>
                                        <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                        </View>                         
                                      </TouchableOpacity>
                                  )
                        })} />      

            <Stack.Screen 
                  name="VaccineList" 
                  component={Vaccines}
                    options={({ navigation }) => ({
                    title: 'Vaccination History',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 

              <Stack.Screen 
                  name="FirstAidTips" 
                  component={FirstAidTips}
                    options={({ navigation }) => ({
                    title: 'First-Aid Tips',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 


              <Stack.Screen 
                  name="TrainingTips" 
                  component={TrainingTips}
                    options={({ navigation }) => ({
                    title: 'Training Tips',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,},
                    headerTitleStyle: { fontSize: 24,  }, // Set the font size and weight of the header title // Set the background color of the header // Align the title to the center
                        headerLeft: () => ( // Add custom headerLeft component
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                      <View style={styles.backButton}>
                                      <FontAwesomeIcon icon={faChevronLeft} size={24} color="#FFFFFF" />
                                      </View>                         
                                    </TouchableOpacity>
                                )
                      })} /> 


              <Stack.Screen 
                  name="GoWithPet" 
                  component={GoWithPet}
                    options={({ navigation }) => ({
                    title: 'Go With Your Pet',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF', // Change the text color of the header title
                    headerStyle: { backgroundColor: '#649F95',height: 100,}, 
                    headerTitleStyle: { fontSize: 24,  },
                    headerLeft: () => ( // Add custom headerLeft component
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="white" />
                                  </View>                         
                                </TouchableOpacity>
                            )
                  })} />

            <Stack.Screen 
                name="HeatTracker" 
                component={HeatTrackerScreen}
                  options={({ navigation }) => ({
                    title: 'Heat Cycle Tracker',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    headerStyle: { backgroundColor: '#649F95',height: 100,}, 
                    headerTitleStyle: { fontSize: 24,  }, // Set the background color of the header // Align the title to the center
                    headerLeft: () => ( // Add custom headerLeft component
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="white" />
                                  </View>                         
                                </TouchableOpacity>
                            )
                  })} />  


            <Stack.Screen 
                  name="CreateHistory" 
                  component={CreateHistory}
                    options={({ navigation }) => ({
                    title: 'Create Medical Record',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    headerStyle: { backgroundColor: '#649F95',height: 100,}, 
                    headerTitleStyle: { fontSize: 24,  }, // Set the background color of the header // Align the title to the center
                    headerLeft: () => ( // Add custom headerLeft component
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="white" />
                                  </View>                         
                                </TouchableOpacity>
                            )
                  })} />  

          <Stack.Screen 
                  name="MedicalHistory" 
                  component={MedicalHistory}
                    options={({ navigation }) => ({
                    title: 'Medical History',
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    headerStyle: { backgroundColor: '#649F95',height: 100,}, 
                    headerTitleStyle: { fontSize: 24,  }, // Set the background color of the header // Align the title to the center
                    headerLeft: () => ( // Add custom headerLeft component
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <View style={styles.backButton}>
                                  <FontAwesomeIcon icon={faChevronLeft} size={24} color="white" />
                                  </View>                         
                                </TouchableOpacity>
                            )
                  })} />


          </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  backButton: {
    padding: 20, // Add padding around the back button
  },

  petInfoBackButton: {
    padding: 20, // Add padding around the back button
    paddingBottom:120,
  },
});

export default App;


