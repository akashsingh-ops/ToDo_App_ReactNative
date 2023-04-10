import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [enteredGoalText, setEnterGoalText] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnterGoalText(enteredText);
  }
  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoal((currentCourseGoals) => [...courseGoal, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoal.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30,
  },
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
  goalsContainer: {
    flex: 4,
  },
});
