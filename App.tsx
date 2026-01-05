import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const upperLimit : number = !isNaN(Number(age)) ? (220 - Number(age)) * 0.85 : 0
  const lowerLimit : number = !isNaN(Number(age)) ? (220 - Number(age)) * 0.65 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
      placeholder="Age"
      keyboardType="number-pad"
      value={age}
      onChangeText={setAge}
      />
      <Text style={styles.text}>Upper limit: {upperLimit.toFixed(2)}</Text>
      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16
  },
  text: {
    marginVertical: 16
  }
});
