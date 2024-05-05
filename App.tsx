import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "./screens/Quiz";
import LeaderBoard from "./screens/LeaderBoard";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Quiz"
          component={Quiz}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderBoard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="leaderboard" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
