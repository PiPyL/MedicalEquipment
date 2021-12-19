import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Constant from '../../controller/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackActions, useNavigation } from '@react-navigation/native'

const ErrorRequest = () => {

    const navigation = useNavigation()
    const [equipment, setEquipment] = useState('')

    const onSearch = () => {
        navigation.dispatch(
            StackActions.push(Constant.nameScreen.EquipmentList, { keyword: equipment, screen: Constant.nameScreen.ErrorRequest })
        )
    }

    const showImageScanner = () => {
        navigation.dispatch(
            StackActions.push(Constant.nameScreen.ImageScanner)
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.title}>
                Nhập để tìm thiết bị cần báo hỏng
            </Text>
            <View style={styles.equipmentView}>
                <TextInput
                    placeholder='Tên thiết bị, mã thiết bị,..'
                    style={styles.equipmentInput}
                    value={equipment}
                    onChangeText={text => setEquipment(text)}
                />
            </View>
            <TouchableOpacity
                onPress={onSearch}
                style={styles.searchTouch}>
                <Text style={styles.searchText}>
                    Tìm kiếm
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Hoặc quét mã QR để tìm kiếm:
            </Text>
            <TouchableOpacity
                onPress={showImageScanner}
            >
                <Ionicons
                    name='qr-code'
                    size={70}
                    style={styles.qrCodeIcon}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ErrorRequest

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 16
    },
    equipmentInput: {
        height: 56,
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 16,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2
    },
    equipmentView: {
        marginHorizontal: 20,
        marginTop: 15
    },
    searchText: {
        color: 'white',
        fontSize: 16
    },
    searchTouch: {
        height: 44,
        backgroundColor: Constant.color.main,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        alignSelf: 'center',
        marginTop: 30,
        overflow: 'hidden'
    },
    qrCodeIcon: {
        alignSelf: 'center',
        marginTop: 30
    }
})
