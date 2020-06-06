import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/context";

const { width, height } = Dimensions.get("window");

const CategoryCard = ({ full, item, onPress }) => {
  const { colors } = useContext(Context);
  return (
    <View
      style={{
        ...styles.container,
        width: full ? width * 0.93 : width * 0.45,
        height: full ? 250 : 300,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress(item.name)}
        style={{
          ...styles.container,
          width: "100%",
          height: full ? 200 : 250,
        }}
      >
        <Image
          source={item.image}
          style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
        />
      </TouchableOpacity>
      <Text style={{ ...styles.text, color: colors.text }}> {item.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
});

export default CategoryCard;
