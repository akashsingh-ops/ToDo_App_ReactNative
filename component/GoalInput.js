import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnterGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnterGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnterGoalText("");
  }
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
