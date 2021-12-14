import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Constant from '../../controller/Constant'
import StaffItem from './components/StaffItem'

const StaffList = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Nhân viên'
        })
    }, [])

    return (
        <SafeAreaView>
            <FlatList
                data={Constant.staffData}
                renderItem={({ item }) => <StaffItem item={item} />}
                keyExtractor={(item) => item?.name}
                contentContainerStyle={{
                    paddingTop: 12
                }}
            />
        </SafeAreaView>
    )
}

export default StaffList

const styles = StyleSheet.create({})
