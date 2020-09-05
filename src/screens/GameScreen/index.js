import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({route, navigation}) {
  const { count } = route.params

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
      <Text>
        Total times I have been here: {count}
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home",{count: count + 1})} />
    </View>
  );
}