import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
const { height, width } = Dimensions.get("window");

const SIZE = width * 0.7;

export default function PageCom({ title, index, translateX }) {
  //Animated Style

  const rStyle = useAnimatedStyle(() => {
    //interpolated Animation
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    const rotate = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0]
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextstyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <View
      style={[
        styles.pagecontainer,
        { backgroundColor: `rgba(0,0,256,0.${index + 3})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{ position: "absolute" }, rTextstyle]}>
        <Text style={styles.txt}>{title}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    height: "100%",
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,

    backgroundColor: "rgba(0, 0, 256, 0.4)",
  },
  txt: {
    fontSize: 70,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
  },
});
