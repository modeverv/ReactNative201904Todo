import React from "react";
import {
    ScrollView,
    Text,
    View,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ddd"
  },
  todoContainer: {
    backgroundColor: "#fff",
    padding: 10
  }
});


export default props => (
  <ScrollView style={styles.scrollView}>
    {props.todos.map((todo, i) => (
      <View key={todo + i} style={styles.todoContainer}>
        <Text>{todo}</Text>
      </View>
    ))}
  </ScrollView>
);
