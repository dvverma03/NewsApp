
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignScreen';
import appStore from './store/appStore';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AustraliaScreen from './screens/AustraliaScreen';
import CanadaScreen from './screens/CanadaScreen';
import ColombiaScreen from './screens/ColombiaScreen';
import IndonesiaScreen from './screens/IndonesiaScreen';
import JapanScreen from './screens/JapanScreen';
import NewZealandScreen from './screens/NewZealandScreen';
import RussiaScreen from './screens/RussiaScreen';
import SingaporeScreen from './screens/SingaporeScreen';
import SwitzerLandScreen from './screens/SwitzerLandScreen';
import ThailandScreen from './screens/ThailandScreen';
import UnitedStateScreen from './screens/UnitedStateScreen';
import { removeUser } from './store/userSlice';
import IconButton from './components/IconButton';

 function Root() {
  const Stack= createNativeStackNavigator()
  const user = useSelector((store)=> store.user)
  const Drawer = createDrawerNavigator()
  const dispatch = useDispatch()
  function LogoutHandler(){
    dispatch(removeUser())
  }
  const MyDrawer=()=>{
    return(
      <Drawer.Navigator>
        <Drawer.Screen 
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }}
        component={HomeScreen} name="India"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={AustraliaScreen} name="Australia"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={CanadaScreen} name="Canada"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={ColombiaScreen} name="Colombia"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={IndonesiaScreen} name="Indonesia"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={JapanScreen} name="Japan"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={NewZealandScreen} name="New Zealand"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={RussiaScreen} name="Russia"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={SingaporeScreen} name="Singapore"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={SwitzerLandScreen} name="Switzerland"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={ThailandScreen} name="Thailand"></Drawer.Screen>
        <Drawer.Screen
        options={{
          drawerIcon: () => (
            <IconButton size={24} name="exit" color='black' />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={LogoutHandler}
            />
          ),
        }} component={UnitedStateScreen} name="United State"></Drawer.Screen>
      </Drawer.Navigator>
    )
  }

  const UnAuthenticate=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="Sign in"></Stack.Screen>
        <Stack.Screen component={SignupScreen} name="Sign up"></Stack.Screen>
      </Stack.Navigator>
    )
  }

   const Authenticate=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen component={MyDrawer} name='DRS News'></Stack.Screen>
        <Stack.Screen component={DetailsScreen} name='Details News'></Stack.Screen>
      </Stack.Navigator>
    )
   }

    return(
      <NavigationContainer>
      {user?<Authenticate/> :<UnAuthenticate/> }
      </NavigationContainer>
    )
}

const App = () => {
  return (
      <Provider store={appStore}>
        <Root/>
      </Provider>
  );
}




export default App;
