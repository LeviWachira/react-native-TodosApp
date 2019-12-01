
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {

  const [courseGoals, SetcourseGoals] = useState([])
  const [isAddMode, SetIsAddmode] = useState(false)

  const onHandleAdd = (enterGoals) => {
    SetcourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: enterGoals
      }])
    SetIsAddmode(false)
  }

  const onHandleDelete = goalID => {
    SetcourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalID)
    })
  }

  const onHandleModeVisible = () => {
    SetIsAddmode(false)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button title="ADD NEW GOAL" onPress={() => SetIsAddmode(true)} />
      </View>
      <GoalInput onAddGoal={onHandleAdd} visible={isAddMode} onCancel={onHandleModeVisible} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            title={itemData.item.value}
            onDeleteGoal={onHandleDelete}
            id={itemData.item.id}
          />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})





