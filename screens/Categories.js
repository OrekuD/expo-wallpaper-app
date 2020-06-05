import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import CategoryCard from "../components/CategoryCard";

const { width, height } = Dimensions.get("screen");

const firstCategory = [
  [
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
  ],
  [
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
  ],
];

const secondCategory = [
  [
    {
      key: Math.random().toString(),
      name: "Music",
      image: require("../assets/images/music.jpg"),
    },
  ],
  [
    {
      key: Math.random().toString(),
      name: "Buildings",
      image: require("../assets/images/buildings.jpg"),
    },
    {
      key: Math.random().toString(),
      name: "Pets",
      image: require("../assets/images/pet-1.jpg"),
    },
  ],
];

const Categories = ({ navigation }) => {
  const viewCategory = (name) => {
    navigation.navigate(name);
  };

  const renderHeader = () => (
    <FlatList
      data={secondCategory[0]}
      renderItem={({ item }) => (
        <CategoryCard full item={item} onPress={viewCategory} />
      )}
    />
  );

  const renderFooter = () => (
    <FlatList
      data={secondCategory[1]}
      renderItem={({ item }) => (
        <CategoryCard full item={item} onPress={viewCategory} />
      )}
      ListFooterComponent={() => (
        <FlatList
          data={firstCategory[1]}
          numColumns={2}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <CategoryCard item={item} onPress={viewCategory} />
          )}
          columnWrapperStyle={styles.row}
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={firstCategory[0]}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={() => Math.random().toString()}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.row}
        renderItem={({ item }) => (
          <CategoryCard item={item} onPress={viewCategory} />
        )}
        ListFooterComponent={renderFooter}
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
  column: {
    width: width,
    justifyContent: "space-evenly",
  },
});

export default Categories;
