import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Constants from "expo-constants";

import { Context } from "../context/context";

import Discover from "../screens/Discover";
import Categories from "../screens/Categories";
import ImagePreview from "../screens/ImagePreview";
import Settings from "../screens/Settings";
import Category from "../screens/Category";

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  const { swipeEnabled, colors } = useContext(Context);
  return (
    <TopTab.Navigator
      swipeEnabled={swipeEnabled}
      tabBarOptions={{
        indicatorStyle: { height: 0 },
        tabStyle: {
          height: 60,
          justifyContent: "flex-end",
          backgroundColor: colors.background,
        },
        labelStyle: {
          fontSize: 22,
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        activeTintColor: colors.text,
        inactiveTintColor: "gray",
      }}
    >
      <TopTab.Screen name="Discover" component={DiscoverSharedStackScreen} />
      <TopTab.Screen name="Categories" component={CategoriesStackScreen} />
    </TopTab.Navigator>
  );
};

const Stack = createStackNavigator();
const CategoriesStackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Category" component={CategorySharedStackScreen} />
    </Stack.Navigator>
  );
};

const CategorySharedStack = createSharedElementStackNavigator();
const CategorySharedStackScreen = () => {
  return (
    <CategorySharedStack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerShown: false,
      }}
    >
      <CategorySharedStack.Screen name="Category" component={Category} />
      <CategorySharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </CategorySharedStack.Navigator>
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
      <DiscoverSharedStack.Screen name="Settings" component={Settings} />
      <DiscoverSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route) => {
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
