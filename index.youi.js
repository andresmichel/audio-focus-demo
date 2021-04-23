import React, { useEffect, useCallback } from "react";
import { AppRegistry, SafeAreaView, StyleSheet } from "react-native";
import { Audio } from "@youi/audio-tools";
import Button from "./button";

const SOUND_URL = "https://www.soundjay.com/button/button-3.wav";

const YiReactApp = () => {
  useEffect(() => {
    (async () => await Audio.load(SOUND_URL))();
  }, []);

  const play = useCallback(() => {
    (async () => await Audio.play(SOUND_URL))();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Button onFocus={play} />
      <Button onFocus={play} />
      <Button onFocus={play} />
      <Button onFocus={play} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);

export default YiReactApp;
