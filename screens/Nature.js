import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { loadImages } from "../constants/Api";
import LoadingScreen from "../components/LoadingScreen";
import ImageCard from "../components/ImageCard";

const { width, height } = Dimensions.get("window");

const Nature = (props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadImages("Nature", setIsLoading, setImages);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={images}
          numColumns={2}
          columnWrapperStyle={styles.row}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => <ImageCard item={item} />}
          contentContainerStyle={styles.images}
          // refreshing={refreshing}
          // onRefresh={refreshImages}
        />
      )}
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

export default Nature;
