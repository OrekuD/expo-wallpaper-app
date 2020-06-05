import React, { useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Alert,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../constants/Layout";
import { Context } from "../context/context";
import Animated from "react-native-reanimated";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const ImagePreview = (props) => {
  const { toggleSwipe } = useContext(Context);
  const { item } = props.route.params;

  const translateY = new Animated.Value(0);
  const opacity = translateY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
  });

  const config = {
    damping: 15,
    mass: 1,
    stiffness: 200,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
  };

  const Anim = () => {
    Animated.spring(translateY, {
      toValue: 0,
      ...config,
    }).start();
  };

  const shareImageDetails = async () => {
    try {
      const result = await Share.share({
        message: `I think you would love this image. Check it out! \n ${item.pageURL}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Trying");
        } else {
          console.log("Succesfully shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dimissed");
      }
    } catch (error) {
      Alert.alert("Share", "There was an issue sharing your image");
    }
  };

  const downloadImage = async () => {
    let cameraPermissions = await Permissions.getAsync(Permissions.CAMERA);
    if (cameraPermissions.status !== "granted") {
      cameraPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
    if (cameraPermissions.status === "granted") {
      FileSystem.downloadAsync(
        item.largeImageURL,
        FileSystem.documentDirectory + item.id + ".jpg"
      )
        .then(async ({ uri }) => {
          const asset = await MediaLibrary.createAssetAsync(uri);
          MediaLibrary.createAlbumAsync("Wallpapers", asset)
            .then(() => {
              Alert.alert("Success", "Image has been saved");
              FileSystem.deleteAsync(uri);
            })
            .catch((error) => {});
        })
        .catch((error) => Alert.alert("Error", "Could not save image"));
    }
  };

  useEffect(() => {
    toggleSwipe(0);
    setTimeout(() => {
      Anim();
    }, 500);

    return () => {
      toggleSwipe(1);
    };
  }, []);

  // const opacity = translateY.interpolate({
  //   inputRange: [-100, 0],
  //   outputRange: [0, 1],
  // });

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
      <Animated.View
        style={{ ...styles.buttons, transform: [{ translateY }], opacity }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={shareImageDetails}
        >
          <Feather name="share" color="white" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={downloadImage}
        >
          <Feather name="download" color="white" size={26} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width > 400 ? 130 : 100,
    zIndex: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(1, 1, 1, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePreview;
