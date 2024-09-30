import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');

  const speak = () => {
    if (text.trim()) {
      Speech.speak(text);
    } else {
      alert('Please enter some text to speak!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Pressable 
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#104E8B' : '#1E90FF'
          },
          styles.button,
        ]}
        onPress={speak}
      >
        <Text style={styles.buttonText}>Press to Hear Text</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
