/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.form}
          onChangeText={text => {console.log(text)} }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
  form: {
    backgroundColor: "#eee",
    padding: 10,
  },
});
