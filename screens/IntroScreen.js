import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const IntroScreen = ({ onPress }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/intro.jpg")}
      style={styles.imageBackground}
      resizeMode="cover"
    />
    <View style={styles.content}>
      <Text style={styles.text}> Are you looking for a wallpaper? </Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.text}> Get Started! </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    width: width * 0.7,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "purple",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    width: width,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 200,
  },
});

export default IntroScreen;
