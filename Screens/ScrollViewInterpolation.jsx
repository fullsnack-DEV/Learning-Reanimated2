import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  event,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PageCom from "../Componets/PageCom,";

const Words = ["Hey", "there", "I'am", "React", "Developer"];

export default function ScrollViewInterpolation() {
  //Store the Contet Offeset Value in the Shared Value

  //Shared value is Designed to Reference the Data
  const translateX = useSharedValue(0);

  //Scrollhablder to get the scroll event with hook

  const scrollhandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollhandler}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      scrollEventThrottle={16}
    >
      {Words.map((title, index) => {
        return (
          <PageCom
            key={index.toString()}
            title={title}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({});

//key to scrollViee animation is getting the scroll Value from the Scroll
//in this scene we can get the Scroll Value using hook
//get the Translate X Value to Animate .
//Store the content Offset Valur in the SharedValue
