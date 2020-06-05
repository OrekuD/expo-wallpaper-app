import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Discover from "../screens/Discover";
import Categories from "../screens/Categories";
import Pets from "../screens/Pets";
import Art from "../screens/Art";
import Nature from "../screens/Nature";

import { View, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const animation = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        const fontSize = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 32 : 24)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
            key={Math.random().toString()}
          >
            <Animated.Text
              style={{
                fontSize,
                opacity: 1,
                width: 160,
                textAlign: "center",
                fontWeight: isFocused ? "bold" : "100",
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <TopTab.Screen name="Discover" component={Discover} />
      <TopTab.Screen name="Categories" component={StackScreen} />
    </TopTab.Navigator>
  );
};

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="Nature" component={Nature} />
      <Stack.Screen name="Art" component={Art} />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
};
