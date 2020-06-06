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
import Travel from "../screens/Travel";
import Food from "../screens/Food";

import ImagePreview from "../screens/ImagePreview";
import Constants from "expo-constants";
import Music from "../screens/Music";
import Buildings from "../screens/Buildings";
import Settings from "../screens/Settings";

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
      <TopTab.Screen name="Categories" component={CategoriesStackScreen} />
    </TopTab.Navigator>
  );
};

const Stack = createStackNavigator();
const CategoriesStackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Pets" component={PetsSharedStackScreen} />
      <Stack.Screen name="Nature" component={NatureSharedStackScreen} />
      <Stack.Screen name="Art" component={ArtSharedStackScreen} />
      <Stack.Screen name="Travel" component={TravelSharedStackScreen} />
      <Stack.Screen name="Music" component={MusicSharedStackScreen} />
      <Stack.Screen name="Food" component={FoodSharedStackScreen} />
      <Stack.Screen name="Buildings" component={BuildingsSharedStackScreen} />
    </Stack.Navigator>
  );
};

const MusicSharedStack = createSharedElementStackNavigator();
const MusicSharedStackScreen = () => {
  return (
    <MusicSharedStack.Navigator
      initialRouteName="Music"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MusicSharedStack.Screen name="Music" component={Music} />
      <MusicSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </MusicSharedStack.Navigator>
  );
};

const FoodSharedStack = createSharedElementStackNavigator();
const FoodSharedStackScreen = () => {
  return (
    <FoodSharedStack.Navigator
      initialRouteName="Food"
      screenOptions={{
        headerShown: false,
      }}
    >
      <FoodSharedStack.Screen name="Food" component={Food} />
      <FoodSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </FoodSharedStack.Navigator>
  );
};

const TravelSharedStack = createSharedElementStackNavigator();
const TravelSharedStackScreen = () => {
  return (
    <TravelSharedStack.Navigator
      initialRouteName="Travel"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TravelSharedStack.Screen name="Travel" component={Travel} />
      <TravelSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </TravelSharedStack.Navigator>
  );
};

const BuildingsSharedStack = createSharedElementStackNavigator();
const BuildingsSharedStackScreen = () => {
  return (
    <BuildingsSharedStack.Navigator
      initialRouteName="Buildings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BuildingsSharedStack.Screen name="Buildings" component={Buildings} />
      <BuildingsSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </BuildingsSharedStack.Navigator>
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

const ArtSharedStack = createSharedElementStackNavigator();
const ArtSharedStackScreen = () => {
  return (
    <ArtSharedStack.Navigator
      initialRouteName="Art"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ArtSharedStack.Screen name="Art" component={Art} />
      <ArtSharedStack.Screen
        name="ImagePreview"
        component={ImagePreview}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </ArtSharedStack.Navigator>
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
