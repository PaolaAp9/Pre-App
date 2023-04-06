import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastre from "../telas/Cadastro";
import Sobre from "../telas/Sobre";
import User from "../telas/User";
import Principal from "../telas/Principal";
import Configuracao from "../telas/Configuração";

const Stack = createNativeStackNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Group
          screenOptions={{ headerTransparent: true, headerTitle: '' }}>
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="Cadastre" component={Cadastre} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Configuração" component={Configuracao} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}