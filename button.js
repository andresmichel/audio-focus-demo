import React, { useState, useCallback } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

const Button = ({ onFocus }) => {
  const [focused, setFocused] = useState(false);
  const handleOnFocus = useCallback(() => {
    setFocused(true);
    onFocus();
  }, []);
  const handleOnBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return (
    <TouchableWithoutFeedback onFocus={handleOnFocus} onBlur={handleOnBlur}>
      <View style={[styles.container, focused ? styles.focused : null]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    backgroundColor: "#555",
    borderColor: "#555",
    borderRadius: 5,
    borderWidth: 2,
  },
  focused: {
    borderColor: "cyan",
  },
});

export default Button;
