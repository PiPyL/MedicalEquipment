import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import EquipmentItem from './components/EquipmentItem'
import RNProgressHud from 'progress-hud'
import DepartmentItem from './components/DepartmentItem'

const DepartmentList = () => {

    const navigation = useNavigation()
    const [departments, setDepartments] = useState([])

    const getAllDepartments = () => {
        RNProgressHud.show()
        APIManager.getAllDepartments()
            .then(departments => setDepartments(departments))
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    useEffect(() => {
        getAllDepartments()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Khoa phòng'
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={departments}
                renderItem={({ item }) => <DepartmentItem item={item} />}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={{
                    paddingTop: 12
                }}
            />
        </SafeAreaView>
    )
}

export default DepartmentList

const styles = StyleSheet.create({

})
