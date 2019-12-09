import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={{ padding: 30 }}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<TextInput
					placeholder="Course Goal"
					style={{ borderColor: 'black', borderWidth: 1, padding: 1 }}
				/>
				<Button title="ADD" />
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({});
