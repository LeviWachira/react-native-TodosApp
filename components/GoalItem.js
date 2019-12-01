import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

const GoalItem = props => {

    const onHandleDeleteGoal = () => {
        props.onDeleteGoal(props.id)
    }

    return (
        <ScrollView>
            <TouchableOpacity activeOpacity={0.7}
                onPress={onHandleDeleteGoal}
            >
                <View style={styles.listItem}>
                    <Text>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        padding: 10,
        marginVertical: 10,
    }
})

export default GoalItem
