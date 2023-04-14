import { StyleSheet, TextInput, Button, Modal, View } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: "#cccccc",
  },
  buttonContainer: { flexDirection: "row", marginTop: 16 },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",

    padding: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
