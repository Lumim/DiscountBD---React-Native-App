import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import { disableExpoCliLogging } from "expo/build/logs/Logs";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: "Login",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-lock' />
          ),
        }}
      />

      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-code-working' />
          ),
        }}
      />

      <BottomTab.Screen
        name='Links'
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-book' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Registration":
      return "Sign UP";

    case "Login":
      return "Login";
    case "Home":
      return "DiscountAPP BD";
    case "Links":
      return "Contact Discount BD";
  }
}
