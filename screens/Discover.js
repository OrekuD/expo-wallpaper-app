import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "../components/ImageCard";

const a = ["", "", "", "", ""];

const renderCard = (item) => {
  return <ImageCard />;
};

const Discover = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={a} numColumns={2} renderItem={renderCard} />
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
});

export default Discover;
