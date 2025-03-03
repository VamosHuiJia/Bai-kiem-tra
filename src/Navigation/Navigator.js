import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../Screens/Home_screen";
import ScanScreen from "../Screens/Scan_screen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlaceholderScreen = ({ title }) => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>{title} Screen</Text>
    </View>
);

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const ScanStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tab.Screen 
                    name="Home" 
                    component={HomeStack} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                    }}
                />
                <Tab.Screen 
                    name="Notifications" 
                    component={() => <PlaceholderScreen title="Notifications" />} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} />,
                    }}
                />
                <Tab.Screen 
                    name="Scan" 
                    component={ScanStack} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons name="scan-outline" size={size} color={color} />, 
                    }}
                />
                <Tab.Screen 
                    name="History" 
                    component={() => <PlaceholderScreen title="History" />} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} />,
                    }}
                />
                <Tab.Screen 
                    name="Cart" 
                    component={() => <PlaceholderScreen title="Cart" />} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    placeholderContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8" },
    placeholderText: { fontSize: 20, color: "gray" }
});

export default AppNavigator;