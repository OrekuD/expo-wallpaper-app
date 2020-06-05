import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Context } from "../context/context";

import Discover from "../screens/Discover";
import Categories from "../screens/Categories";
import Pets from "../screens/Pets";
import Art from "../screens/Art";
import Nature from "../screens/Nature";

import ImagePreview from "../screens/ImagePreview";
import Constants from "expo-constants";

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  const { swipeEnabled } = useContext(Context);
  return (
    <TopTab.Navigator
      swipeEnabled={swipeEnabled}
      // tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        indicatorStyle: { height: 0 },
        tabStyle: {
          height: Constants.statusBarHeight + 60,
          justifyContent: "flex-end",
        },
        labelStyle: {
          fontSize: 22,
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      }}
    >
      <TopTab.Screen name="Discover" component={DiscoverSharedStackScreen} />
      <TopTab.Screen name="Categories" component={StackScreen} />
    </TopTab.Navigator>
  );
};

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Pets" component={PetsSharedStackScreen} />
      <Stack.Screen name="Nature" component={NatureSharedStackScreen} />
      <Stack.Screen name="Art" component={Art} />
    </Stack.Navigator>
  );
};

const PetsSharedStack = createSharedElementStackNavigator();
const PetsSharedStackScreen = () => {
  return (
    <PetsSharedStack.Navigator
      initialRouteName="Pets"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PetsSharedStack.Screen name="Pets" component={Pets} />
      <PetsSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </PetsSharedStack.Navigator>
  );
};

const NatureSharedStack = createSharedElementStackNavigator();
const NatureSharedStackScreen = () => {
  return (
    <NatureSharedStack.Navigator
      initialRouteName="Nature"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NatureSharedStack.Screen name="Nature" component={Nature} />
      <NatureSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </NatureSharedStack.Navigator>
  );
};

const DiscoverSharedStack = createSharedElementStackNavigator();
const DiscoverSharedStackScreen = () => {
  return (
    <DiscoverSharedStack.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DiscoverSharedStack.Screen name="Discover" component={Discover} />
      <DiscoverSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </DiscoverSharedStack.Navigator>
  );
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
};
