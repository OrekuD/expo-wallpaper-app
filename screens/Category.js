import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { loadImages } from "../util/Api";
import LoadingScreen from "../components/LoadingScreen";
import ImageCard from "../components/ImageCard";
import { Context } from "../context/context";

const { width, height } = Dimensions.get("window");

const Category = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { category, colors } = useContext(Context);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    loadImages(category, setIsLoading, setImages);
  }, []);

  const refreshImages = () => {
    setRefreshing(true);
    if (pageIndex >= 10) {
      setPageIndex(1);
    } else {
      setPageIndex(pageIndex + 1);
    }
    loadImages(category, setIsLoading, setImages, setRefreshing, pageIndex);
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
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

export default Category;
