import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Game still to be designed!
      </Text>
    </View>
  );
}