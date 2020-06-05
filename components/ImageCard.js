import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { Context } from "../context/context";

const { width, height } = Dimensions.get("window");

const ImageCard = ({ item, navigation }) => {
  const viewImage = () => {
    navigation.navigate("ImagePreview", { item });
  };

  return (
    <TouchableOpacity
      onPress={viewImage}
      activeOpacity={0.8}
      style={styles.container}
    >
      <SharedElement style={{ flex: 1 }} id={`item.${item.id}.photo`}>
        <Image
          source={{ uri: item.largeImageURL }}
          resizeMode="cover"
          style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
        />
      </SharedElement>
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
