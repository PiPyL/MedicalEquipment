import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EquipmentItem from './components/EquipmentItem'

const EquipmentList = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Thiết bị'
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                renderItem={({ item }) => <EquipmentItem />}
                keyExtractor={(item) => item.toString()}
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
