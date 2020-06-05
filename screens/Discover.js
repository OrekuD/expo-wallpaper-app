import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "../components/ImageCard";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";
import { PIXABAY_API_KEY, loadImages } from "../constants/Api";

const { width, height } = Dimensions.get("window");
const Discover = ({ navigation }) => {
  const [tag, setTag] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadImages(tag, setIsLoading, setImages);
  }, []);

  const refreshImages = () => {
    setRefreshing(true);
    loadImages();
  };

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
          renderItem={({ item }) => (
            <ImageCard item={item} navigation={navigation} />
          )}
          contentContainerStyle={styles.images}
          refreshing={refreshing}
          onRefresh={refreshImages}
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

export default Discover;
