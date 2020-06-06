import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import CategoryCard from "../components/CategoryCard";
import { Context } from "../context/context";

const { width, height } = Dimensions.get("screen");

const categoriesDetails = [
  {
    key: Math.random().toString(),
    name: "Music",
    image: require("../assets/images/music.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Art",
    image: require("../assets/images/art.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Pets",
    image: require("../assets/images/pet-1.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Nature",
    image: require("../assets/images/nature.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Food",
    image: require("../assets/images/food.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Travel",
    image: require("../assets/images/travel.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Buildings",
    image: require("../assets/images/buildings.jpg"),
  },
];

const Categories = ({ navigation }) => {
  const { setCategory, colors } = useContext(Context);

  const viewCategory = (name) => {
    setCategory(name);
    navigation.push("Category");
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <FlatList
        data={categoriesDetails}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <CategoryCard full item={item} onPress={viewCategory} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  row: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  column: {
    width: width,
    justifyContent: "space-evenly",
  },
});

export default Categories;
