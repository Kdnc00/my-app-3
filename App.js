import React from "react";
import {Text,Button,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator}from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicos from "recat-native-vector-icons/Ionicons";

const Profile =({navigation}) =>{
  return (
    <View>
      <Text>You have to Sign in</Text>
      <Button title="SignIn" 
       onPress={() => {
        navigation.navigate('Sign In');
       }}
      />
      <Button title="SignUp" 
       onPress={() => {
        navigation.navigate('SignUp');
       }} 
      />    
    </View>
  );

};


const SignIn=() =>{

  return <Text>SignIn{route.params.user}</Text>
};

const SignUp=()=>{
  return <Text>SignUp</Text>
};

const Stack= createNativeStackNavigator ();

const ProfileStack = ()=>{
   return(
      <Stack.Navigator>
        <Stack.Screen name="Profile" 
        component={Profile}/>
        <Stack.Screen name="SignIn"  
        companent={SignIn}
        options={{title:"Sign In"}}/>
        <Stack.Screen name="SignUp"  
        companent={SignUp}
        options={({route})=>({title:
        'Sign In (${route.params.user})'}) }/>
      </Stack.Navigator>  
   );

};

const Home = () =>{
   return <Text>Home</Text>
};



const Tabs= createBottomTabNavigator();

const Main= () => {
  return( 
   <Tabs.Navigator>
    <Tabs.Screen 
      name="ProfileStack" 
      companent={ProfileStack}
      options={{
        title:"Profile",
        headerShown:false,
        tabBarIcon: (props) => <Ionicos name="and-person"{...props}/>,
      }}
    />   
    <Tabs.Screen name="Home"
      companent={Home} 
      options={{
        tabBarIcon: (props) => <Ionicons name="and-home" {...props} />,
      }}
    />   
   </Tabs.Navigator>

  );

};
const About= () =>{
   return <Text>About</Text>
};

const Drawer=createDrawerNavigator();
const App=() =>{
  return(
    <NavigationContainer>
     <Drawer.Navigator>
       <Drawer.Screen name="Main" companent={Main}/>
       <Drawer.Screen name0="About" companent={About}/>
     
     </Drawer.Navigator>
    
      
    </NavigationContainer>

  );
};
export default App;