import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  Keyboard,
  Text,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import ImageCard from "../components/ImageCard";
import LoadingScreen from "../components/LoadingScreen";
import { loadImages } from "../util/Api";
import { AntDesign, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Context } from "../context/context";

const { width, height } = Dimensions.get("window");

const Discover = ({ navigation }) => {
  const { colors, toggleTheme } = useContext(Context);
  const [tag, setTag] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const opacity = new Animated.Value(1);

  useEffect(() => {
    loadImages(tag, setIsLoading, setImages);
  }, []);

  const refreshImages = () => {
    setRefreshing(true);
    setTag("");
    if (pageIndex >= 20) {
      setPageIndex(1);
    } else {
      setPageIndex(pageIndex + 1);
    }
    loadImages("", setIsLoading, setImages, setRefreshing, pageIndex);
  };

  const searchImages = () => {
    setIsLoading(true);
    Keyboard.dismiss();
    loadImages(tag, setIsLoading, setImages);
  };

  const switchTheme = () => {
    Animated.timing(opacity, {
      toValue: 0.8,
      duration: 200,
      easing: Easing.linear(Easing.ease),
    }).start();
    setTimeout(() => {
      toggleTheme();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear(Easing.ease),
      }).start();
    }, 200);
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
        opacity,
      }}
    >
      <View style={styles.header}>
        <View
          style={{ ...styles.textInputContainer, borderColor: colors.text }}
        >
          <TextInput
            value={tag}
            onChangeText={(text) => setTag(text)}
            style={{ ...styles.textInput, color: colors.text }}
            onSubmitEditing={searchImages}
          />
          <BorderlessButton onPress={searchImages}>
            <AntDesign name="search1" color={colors.text} size={26} />
          </BorderlessButton>
        </View>
        <BorderlessButton onPress={switchTheme}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            color={colors.text}
            size={26}
          />
        </BorderlessButton>
      </View>
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
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.text}> No photos found </Text>
              <RectButton onPress={refreshImages} style={styles.button}>
                <Feather name="refresh-cw" color={colors.text} size={30} />
              </RectButton>
            </View>
          )}
        />
      )}
    </Animated.View>
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
  header: {
    width: width,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInputContainer: {
    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textInput: {
    height: "100%",
    width: "75%",
    fontSize: 18,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    marginTop: 100,
  },
});

export default Discover;
