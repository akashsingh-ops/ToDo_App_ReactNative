import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoal((currentCourseGoals) => [
      ...courseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteHandler() {
    console.log("Item Deleted!");
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
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

  goalsContainer: {
    flex: 4,
  },
});
