import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Modal,
    Alert,
} from 'react-native'

const GoalInput = props => {

    const [enterGoals, SetenterGoals] = useState('');

    const onChangeInput = (enterText) => {
        enterText === null ? Alert.alert(`Please Fill Todos`) : SetenterGoals(enterText);
    }

    const onHandleAddButton = () => {
        props.onAddGoal(enterGoals)
        SetenterGoals('')
    }

    return (
        <Modal visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    onChangeText={onChangeInput}
                    placeholder="Add Todos"
                    value={enterGoals}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={onHandleAddButton} />
                    </View>
                    <View style={styles.button}>
                    <Button title='CANCLE' color='red' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput
