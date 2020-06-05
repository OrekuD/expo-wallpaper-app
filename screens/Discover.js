import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "../components/ImageCard";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";

const a = ["", "", "", "", ""];

const renderCard = ({ item }) => {
  return <ImageCard item={item} />;
};

const { width, height } = Dimensions.get("window");
const PIXABAY_API_KEY = "16895568-53777586a2e1fe1737ccf25dd";

const Discover = (props) => {
  const [tag, setTag] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadImages = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${tag}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setImages(res.data.hits);
        setIsLoading(false);
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
        console.log(err);
      });
  };

  useEffect(() => {
    loadImages();
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
          renderItem={renderCard}
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
