import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headingcontainer}>
          <Text style={styles.heading}> Animations </Text>
        </View>
        <View style={styles.contentcontainer}>
          <Pressable onPress={() => navigation.navigate("Animation1")}>
            <Text style={styles.headingsub}>
              ScrollView Interpolated Animation
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    marginTop: 55,
  },
  contentcontainer: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  headingsub: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
