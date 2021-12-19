import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constant from '../../controller/Constant';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import ScannerContainer from '../scan/ScannerContainer';
import NotificationList from '../message/NotificationList';
import ImageScanner from '../scan/ImageScanner';

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    size = 32
                    if (route.name === Constant.nameScreen.Home) {
                        size = 29
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === Constant.nameScreen.NotificationList) {
                        iconName = focused ? 'mail' : 'mail-outline'
                    } else if (route.name === Constant.nameScreen.Settings) {
                        iconName = focused ? 'options' : 'options-outline'
                    } else if (route.name === Constant.nameScreen.ImageScanner) {
                        size = 29
                        iconName = focused ? 'qr-code' : 'qr-code-outline'
                    } else {
                        size = 29
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={Constant.color.main} />
                },
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,

                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: Constant.color.second,
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleStyle: {
                    fontSize: 16
                }
            })}
        >
            <Tab.Screen
                name={Constant.nameScreen.Home}
                component={Home}
            />
            <Tab.Screen
                name={Constant.nameScreen.NotificationList}
                component={NotificationList}
                options={{
                    title: 'Thông báo'
                }}
            />
            <Tab.Screen
                name={Constant.nameScreen.ImageScanner}
                component={ImageScanner}
            />
            {/* <Tab.Screen
                name={Constant.nameScreen.Settings}
                component={Settings}
            /> */}
            <Tab.Screen
                name={Constant.nameScreen.Profile}
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBarNavigation

const styles = StyleSheet.create({})
