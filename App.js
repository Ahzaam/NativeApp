import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { CommonActions, useNavigation } from '@react-navigation/native';
// import * as Device from 'expo-device';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { firestore, authenticate } from './Services/firebase';
import { useState } from 'react';
// import { useRef, useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// // import { schedulePushNotification } from './Services/notification';
import Banner from './Pages/banner';
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

function HomeScreen() {
	const [text, setText] = useState('');
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Banner />

			<TextInput
				style={styles.input}
				value={text}
				onChangeText={setText}
				placeholder="Enter Something"
				keyboardType="text"
			/>
			<Button
				title="Console Log"
				onPress={() => {
					console.log(text);
				}}
			/>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button title="My Shop" onPress={() => get()} />
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = 'home';
						} else if (route.name === 'Settings') {
							iconName = focused ? 'ios-list' : 'ios-list-outline';
						}
						// else if (route.name === 'Notification') {
						// 	iconName = focused
						// 		? 'notifications-sharp'
						// 		: 'notifications-circle';
						// }

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				})}>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{ tabBarBadge: 3 }}
				/>
				<Tab.Screen name="Settings" component={SettingsScreen} />
				{/* <Tab.Screen name="Notification" component={Notification} /> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
}
