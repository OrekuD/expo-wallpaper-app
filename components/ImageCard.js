import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ImageCard = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        source={{ uri: item.webformatURL }}
        resizeMode="cover"
        style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: 250,
    marginBottom: 15,
  },
});

export default ImageCard;
