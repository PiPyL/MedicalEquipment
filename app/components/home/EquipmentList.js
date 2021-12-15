import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import EquipmentItem from './components/EquipmentItem'
import RNProgressHud from 'progress-hud'

const EquipmentList = () => {

    const navigation = useNavigation()
    const [equipments, setEquipments] = useState([])

    const getAllEquipments = () => {
        RNProgressHud.show()
        APIManager.getAllEquipments()
            .then(equipments => setEquipments(equipments))
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    useEffect(() => {
        getAllEquipments()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Thiết bị'
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={equipments}
                renderItem={({ item }) => <EquipmentItem item={item} />}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={{
                    paddingTop: 12
                }}
            />
        </SafeAreaView>
    )
}

export default EquipmentList

const styles = StyleSheet.create({

})
