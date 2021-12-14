import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabBarNavigation from './TabBarNavigation';
import Constant from '../../controller/Constant';
import Login from '../authentication/Login';
import EquipmentList from '../home/EquipmentList';
import StaffList from '../home/StaffList';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={Constant.color.bgColor} barStyle='dark-content' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Constant.nameScreen.Login}
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={Constant.nameScreen.TabBar}
                        component={TabBarNavigation}
                        options={{
                            headerShown: false,
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen
                        name={Constant.nameScreen.EquipmentList}
                        component={EquipmentList}
                        screenOptions={{
                            headerShown: true
                        }}
                    />
                    <Stack.Screen
                        name={Constant.nameScreen.StaffList}
                        component={StaffList}
                        screenOptions={{
                            headerShown: true
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootNavigation
