import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

const App = () => {
  let plusNum = 0;
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [n, setN] = useState(0);

  const plusHandler = () => {
    setN(Number(num1) + Number(num2));
  };

  return (
    <View style={styles.viewBox}>
      <View
        style={{
          width: 390,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#000",
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 24 }}>{n}</Text>
      </View>

      <View style={styles.viewBox2}>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum1(text)}
        ></TextInput>
        <Text style={{ fontSize: 27, marginTop: 1 }}>+</Text>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum2(text)}
        ></TextInput>

        <Button title="실행하기" onPress={() => plusHandler()}></Button>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "column",
    fontSize: 25,
    backgroundColor: "#f5f6fa",
  },

  titleText: {
    fontSize: 24,
  },

  viewBox2: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },

  plusInput: {
    width: 100,
    height: 40,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  plusButton: {
    width: 100,
    height: 40,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    padding: 5,
  },
});
