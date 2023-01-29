import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Login from "./pages/Login";
import Produtos from "./pages/Produtos"


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }} name="login" component={Login} />

         <AppStack.Screen  options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }}name="Produtos" component={Produtos} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
