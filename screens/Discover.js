import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "../components/ImageCard";

const a = ["", "", "", "", ""];

const renderCard = (item) => {
  return <ImageCard key={Math.random().toString()} />;
};

const { width, height } = Dimensions.get("window");

const Discover = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={a}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={renderCard}
        contentContainerStyle={styles.images}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  images: {
    paddingTop: 15,
  },
});

export default Discover;
