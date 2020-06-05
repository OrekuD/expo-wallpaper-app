import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import CategoryCard from "../components/CategoryCard";

const { width, height } = Dimensions.get("screen");

const categories = [
  {
    key: Math.random().toString(),
    name: "Art",
    image: require("../assets/images/art.jpg"),
  },
  {
    key: Math.random().toString(),
    name: "Nature",
    image: require("../assets/images/nature.jpg"),
  },
];

const pets = {
  key: Math.random().toString(),
  name: "Pets",
  image: require("../assets/images/pet-1.jpg"),
};

const Categories = ({ navigation }) => {
  const viewCategory = (name) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <CategoryCard item={item} onPress={viewCategory} />
        )}
        ListFooterComponent={() => (
          <CategoryCard full item={pets} onPress={viewCategory} />
        )}
        ListFooterComponentStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
  },
  row: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Categories;
