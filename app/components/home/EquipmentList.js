import { useNavigation, useRoute, StackActions } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import EquipmentItem from './components/EquipmentItem'
import RNProgressHud from 'progress-hud'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ActionSheet from 'react-native-actionsheet'
import Constant from '../../controller/Constant'

const EquipmentList = () => {

    const route = useRoute()
    const navigation = useNavigation()
    const [equipments, setEquipments] = useState([])
    const actionSheetRef = useRef(null)
    const equipmentsRoot = useRef([])
    const keyword = route.params?.keyword ?? ''
    const screen = route.params?.screen ?? ''

    const showEquipmentDetails = (equipmentId) => {
        navigation.dispatch(
            StackActions.push(Constant.nameScreen.EquipmentDetails, { equipmentId })
        )
    }

    const showEquipmentInventory = (id, name) => {
        navigation.dispatch(
            StackActions.push(Constant.nameScreen.EquipmentInventoryInput, { name, id })
        )
    }

    const showErrorInfoInput = (id, name) => {
        navigation.dispatch(
            StackActions.push(Constant.nameScreen.ErrorInfoInput, { name, id })
        )
    }

    const onSelectEquipment = (equipmentId, equipmentName) => {
        switch (screen) {
            case Constant.nameScreen.ErrorRequest:
                showErrorInfoInput(equipmentId, equipmentName)
                return
            case Constant.nameScreen.EquipmentInventory:
                showEquipmentInventory(equipmentId, equipmentName)
                return
            default:
                showEquipmentDetails(equipmentId)
                return
        }
    }

    const getAllEquipments = () => {
        RNProgressHud.show()
        APIManager.getAllEquipments(keyword)
            .then(equipments => {
                setEquipments(equipments)
                equipmentsRoot.current = equipments
            })
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    const onSelectFilter = (index) => {
        if (index === 7) {
            return
        }
        if (index === 6) {
            setEquipments(equipmentsRoot.current)
            return
        }
        const status = Constant.equipmentStatus[index]
        const list = equipmentsRoot.current.filter(e => e?.status === status?.key)
        setEquipments(list)
    }

    const onTapFilter = () => {
        actionSheetRef.current.show()
    }

    useEffect(() => {
        getAllEquipments()
    }, [keyword])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Thiết bị',
            headerRight: () => <TouchableOpacity onPress={onTapFilter}>
                <Ionicons
                    name='funnel-outline'
                    size={22}
                />
            </TouchableOpacity>
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={equipments}
                renderItem={({ item }) => <EquipmentItem item={item} onPress={() => onSelectEquipment(item?.id, item?.title)} />}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={{
                    paddingTop: 12
                }}
            />
            <ActionSheet
                ref={actionSheetRef}
                title={'Lọc'}
                options={[...Constant.equipmentStatus.map(e => e?.value), 'Tất cả', 'Hủy']}
                cancelButtonIndex={7}
                onPress={onSelectFilter}
            />
        </SafeAreaView>
    )
}

export default EquipmentList

const styles = StyleSheet.create({

})
