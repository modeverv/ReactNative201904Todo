import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ddd"
  },
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "space-between"
  }
});

export default props => (
  <ScrollView style={styles.scrollView}>
    {props.todos.map((todo, i) => (
      <View key={todo + i} style={styles.todoContainer}>
        <Text>{todo}</Text>
        <TouchableOpacity onPress={() => props.onPressDelete(i)}>
          <Text>DELETE</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);
