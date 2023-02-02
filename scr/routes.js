import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Cadastro from "./pages/Cadastro";


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }} name="Login" component={Login} />

         <AppStack.Screen  options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }}name="Produtos" component={Produtos} />

        <AppStack.Screen options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }} name="Cadastro" component={Cadastro} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
