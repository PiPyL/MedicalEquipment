import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import Constant from '../../controller/Constant'
import RNProgressHud from 'progress-hud'
import { useNavigation, useRoute } from '@react-navigation/native'

const EquipmentDetails = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const equipmentId = route.params?.equipmentId ?? ''
    const [equipment, setEquipment] = useState()

    const getAEquipment = () => {
        if (equipmentId === '') {
            return
        }
        RNProgressHud.show()
        APIManager.getAEquipment(equipmentId)
            .then(equipment => setEquipment(equipment))
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    useEffect(() => {
        getAEquipment()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: equipment?.title
        })
    }, [equipment])

    return (
        <SafeAreaView style={styles.rootView}>
            <FastImage
                source={require('../../assets/images/img_noi_soi.jpeg')}
                style={styles.image}
                resizeMode='cover'
            />
            <View style={styles.infoView}>
                {/* <Text>
                    Tên thiết bị
                </Text> */}
                <Text style={styles.name}>
                    {equipment?.title}
                </Text>
                <Text style={styles.title}>
                    Model: <Text style={styles.value}>{equipment?.model}</Text>
                </Text>
                <Text style={styles.title}>
                    Serial: <Text style={styles.value}>{equipment?.serial}</Text>
                </Text>
                <Text style={styles.title}>
                    Năm sản xuất: <Text style={styles.value}>{equipment?.year_manufacture}</Text>
                </Text>
                <Text style={styles.title}>
                    Năm sử dụng: <Text style={styles.value}>{equipment?.year_use}</Text>
                </Text>
                <Text style={styles.title}>
                    Hãng sản xuất: <Text style={styles.value}>{equipment?.manufacturer}</Text>
                </Text>
                <Text style={styles.title}>
                    Xuất sứ: <Text style={styles.value}>{equipment?.origin}</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default EquipmentDetails

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: Constant.screen.width * 3 / 4,
        backgroundColor: 'gray'
    },
    title: {
        marginBottom: 8
    },
    value: {
        fontSize: 16,
        color: Constant.color.text,
    },
    infoView: {
        paddingHorizontal: 12,
        marginTop: 12
    },
    name: {
        color: Constant.color.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'center',
        textAlign: 'center'
    }
})