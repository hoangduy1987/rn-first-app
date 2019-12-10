import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoal, setCourseGoal] = useState([]);

	const enterGoalHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addGoalHander = () => {
		setCourseGoal(courseGoal => [...courseGoal, enteredGoal]);
	};

	return (
		<View style={styles.root}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.inputItem}
					onChangeText={enterGoalHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHander} />
			</View>
			<View>
				{courseGoal.map((goal) => 
					<Text key={goal}>{goal}</Text>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputItem: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 1.5,
		width: '80%',
	},
});
