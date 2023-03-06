import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [n, setN] = useState(0);

  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [n2, setN2] = useState(0);

  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [n3, setN3] = useState(0);

  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);
  const [n4, setN4] = useState(0);

  const plusHandler = () => {
    setN(Number(num1) + Number(num2));
  };

  const minusHandler = () => {
    setN2(Number(num3) - Number(num4));
  };

  const multiplyHandler = () => {
    setN3(Number(num5) * Number(num6));
  };

  const divideHandler = () => {
    setN4(Number(num7) / Number(num8));
  };

  return (
    <View style={styles.viewBox}>
      <View
        style={{
          width: 390,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#000",
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 24 }}>{n}</Text>
        <Text style={{ fontSize: 24 }}>{n2}</Text>
        <Text style={{ fontSize: 24 }}>{n3}</Text>
        <Text style={{ fontSize: 24 }}>{n4}</Text>
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

      <View style={styles.viewBox2}>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum3(text)}
        ></TextInput>
        <Text style={{ fontSize: 27, marginTop: 1 }}>-</Text>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum4(text)}
        ></TextInput>

        <Button title="실행하기" onPress={() => minusHandler()}></Button>
      </View>

      <View style={styles.viewBox2}>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum5(text)}
        ></TextInput>
        <Text style={{ fontSize: 27, marginTop: 8 }}>*</Text>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum6(text)}
        ></TextInput>

        <Button title="실행하기" onPress={() => multiplyHandler()}></Button>
      </View>

      <View style={styles.viewBox2}>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum7(text)}
        ></TextInput>
        <Text style={{ fontSize: 27, marginTop: 1 }}>/</Text>
        <TextInput
          style={styles.plusInput}
          placeholder="...."
          keyboardType="numeric"
          onChangeText={(text) => setNum8(text)}
        ></TextInput>

        <Button title="실행하기" onPress={() => divideHandler()}></Button>
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
    width: 40,
    height: 20,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    padding: 5,
  },
});
