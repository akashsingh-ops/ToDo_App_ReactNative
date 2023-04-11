// import { StyleSheet } from "react-native";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.addText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  addText: {
    color: "white",
  },
});
