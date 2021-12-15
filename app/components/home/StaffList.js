import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import StaffItem from './components/StaffItem'
import RNProgressHud from 'progress-hud'

const StaffList = () => {

    const navigation = useNavigation()
    const [staffs, setStaffs] = useState([])

    const getAllUser = () => {
        RNProgressHud.show()
        APIManager.getAllUser()
            .then(staffs => setStaffs(staffs))
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    useEffect(() => {
        getAllUser()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Nhân viên'
        })
    }, [])

    return (
        <SafeAreaView>
            <FlatList
                data={staffs}
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
