/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: "",
    todos: [],
  };

  onChangeText(newTodo) {
    this.setState({ newTodo });
  }

  onPressAdd() {
    console.log(this.state.newTodo);
    const { newTodo } = this.state
    this.setState({
      newTodo: '',
      todos: [ newTodo, ...this.state.todos ],
    })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          style={styles.form}
          onChangeText={text => {
            this.onChangeText(text);
          }}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.onPressAdd()}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          {this.state.todos.map((todo, i) => (
            <View key={todo + i} style={styles.todoContainer}>
              <Text>{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  form: {
    backgroundColor: "#eee",
    padding: 10
  },
  addButton: {
    backgroundColor: "#333",
    padding: 14,
    borderRadius: 4,
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold", 
  },
  scrollView: {
    backgroundColor: "#ddd",
  },
  todoContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
});
