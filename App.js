import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);
  function startAddGoalHanlder() {
    setModalIsVisible(true);
  }
  function endGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }
  function deleteHandler(id) {
    // console.log("Item Deleted!");
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Text
          style={{
            paddingTop: 1,
            alignSelf: "center",
            color: "white",
            fontSize: 20,
            backgroundColor: "#4008CA",
            padding: 10,
            borderRadius: 10,
            marginBottom: 15,
          }}
        >
          To-Do-App
        </Text>
        <Button
          title="Add New Goal "
          backgroundColor="#4008CA"
          onPress={startAddGoalHanlder}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              itemData.index;
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30,
    backgroundColor: "#E7F8FA",
  },

  goalsContainer: {
    flex: 4,
  },
});
