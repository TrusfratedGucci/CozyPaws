import { decode } from 'base-64';
global.atob = decode;



import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DrawerContent from './home_feature/DrawerContent.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const StackNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator 
      screenOptions={{
        // headerShown: false,
      }}
    >
    
   
    
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
                headerStyle: { backgroundColor: '#649F95' },
                headerLeft: () => (
                  <TouchableOpacity
                    style={styles.menuIcon}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
                  >
                    <FontAwesomeIcon icon={faBars} size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                )
              })}
            />  


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
                                    <TouchableOpacity onPress={() => navigation.navigate('AddPet')}>
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
      
  )
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);

  const toggleSignOutModal = () => {
  setIsSignOutModalVisible(!isSignOutModalVisible);
};

const handleSignOut = () => {
  // Perform sign-out logic here
  // For navigation, you can use navigation.navigate('StartScreen');
};


  return (
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent{...props}/>}
    screenOptions={{ headerShown: false }}>
    <Drawer.Screen name='Sign out' component={StackNav}
    listeners={{
      tabPress: (e) => {
        e.preventDefault();
        const showSignOutConfirmation = () => {
          Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
              { text: 'No', onPress: toggleSignOutModal },
              { text: 'Yes', onPress: handleSignOut },
            ],
            { cancelable: true }
          );
        };
      },
    }}
    />
    </Drawer.Navigator>
    
  );
}

function App() {
  return (
    <NavigationContainer>
      <DrawerNav/>
      {/* Render the menu icon outside the navigator */}
      <MenuIcon />
    </NavigationContainer>
  );
}

const MenuIcon = () => {
  const navigation = useNavigation();
}

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
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  
});

export default App;