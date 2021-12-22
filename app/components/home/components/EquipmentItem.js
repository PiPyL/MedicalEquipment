import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Constant from '../../../controller/Constant'

const heightItem = 100

const EquipmentItem = ({ item, onPress }) => {

    const getStatus = () => {
        const list = Constant.equipmentStatus.filter(e => e?.key?.toLowerCase() === item?.status?.toLowerCase())
        if (list.length > 0) {
            return list[0]?.value
        }
        return ''
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.contentView}>
            <FastImage
                resizeMode='cover'
                source={{ uri: Constant.imageBaseURL + `/${item?.path}` }}
                style={styles.image} />
            <View style={styles.infoView}>
                <Text style={styles.name}>
                    {item?.title}
                </Text>
                <Text style={styles.model}>
                    {`Model: ${item?.model}`}
                </Text>
                <Text style={styles.serial}>
                    {`Serial: ${item?.serial}`}
                </Text>
                <Text style={styles.status}>
                    {`Trạng thái: ${getStatus()}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default EquipmentItem

const styles = StyleSheet.create({
    contentView: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        backgroundColor: 'gray',
        marginRight: 12
    },
    infoView: {
        flex: 1
    },
    name: {
        color: 'black',
    },
    model: {
        marginVertical: 2,
        fontSize: 12,
        color: Constant.color.text
    },
    serial: {
        fontSize: 12,
        color: Constant.color.text
    },
    status: {
        fontSize: 12,
        color: Constant.color.text,
        marginTop: 2
    }
})
