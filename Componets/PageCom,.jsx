import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withDelay,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
const { height, width } = Dimensions.get("window");

const SIZE = width * 0.1;

//timming config

export default function PageCom({ title, index, translateX }) {
  const AnimatedopacityView = useSharedValue(1);
  const issliding = useSharedValue();

  translateX.value = withTiming(translateX.value, {
    duration: 500,

    easing: Easing.in(Easing.exp),
  });

  const rStyle = useAnimatedStyle(() => {
    //interpolated Animation
    const scale = interpolate(
      translateX.value,

      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 6, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 50, 0],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-50, 1, -50],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  // : withTiming(translateX.value, {
  //       duration: 2000 ,

  //       easing:Easing.in(Easing.exp)
  //     })

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
    <View style={[styles.pagecontainer]}>
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

    backgroundColor: "hotpink",
  },
  txt: {
    fontSize: 70,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
  },
});
