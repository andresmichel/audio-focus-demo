import React, { useState, useCallback } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

const Button = ({ onPress, onFocus }) => {
  const [focused, setFocused] = useState(false);

  const handleOnPress = useCallback(() => {
    setFocused(true);
    onPress();
  }, []);

  const handleOnFocus = useCallback(() => {
    setFocused(true);
    onFocus();
  }, []);

  const handleOnBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <TouchableWithoutFeedback
      onPressIn={handleOnPress}
      onPressOut={handleOnBlur}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <View style={[styles.container, focused ? styles.focused : null]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 80,
    margin: 5,
    backgroundColor: "#272E37",
    borderColor: "#272E37",
    borderRadius: 10,
    borderWidth: 2,
  },
  focused: {
    borderColor: "#326DFF",
  },
});

export default Button;
