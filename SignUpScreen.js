import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [state, setState] = useState({
    Name: '',
    Password: '',
    Email: '',
    Mobile: '',
  });

  const { Name, Password, Email, Mobile } = state;

  const handleChange = (text, id) => {
    setState({
      ...state,
      [id]: text,
    });
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => handleChange(text, 'Name')}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => handleChange(text, 'Email')}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Mobile Number"
          onChangeText={(text) => handleChange(text, 'Mobile')}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange(text, 'Password')}
          style={styles.input}
          secureTextEntry
        />
         <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              name: Name,
              email: Email,
              mobile: Mobile,
            })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F'
  }
})
