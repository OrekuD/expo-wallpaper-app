import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../constants/Layout";
import { Context } from "../context/context";

const ImagePreview = (props) => {
  const { toggleSwipe } = useContext(Context);
  const { item } = props.route.params;

  useEffect(() => {
    toggleSwipe(0);
    return () => {
      toggleSwipe(1);
    };
  }, []);

  return (
    <View style={styles.container}>
      <SharedElement
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: "white",
        }}
        id={`item.${item.id}.photo`}
      >
        <Image
          source={{ uri: item.largeImageURL }}
          style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
          resizeMode="cover"
        />
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImagePreview;
