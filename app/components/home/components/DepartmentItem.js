import React from 'react'
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Constant from '../../../controller/Constant'
import InfoItem from './InfoItem'

const DepartmentItem = ({ item }) => {

    const onTapPhone = () => {
        Linking.openURL(`tel:${item?.phone}`)
    }

    const getAvatar = () => {
        if (item?.profile_photo_url) {
            return { uri: item?.profile_photo_url }
        }
        return require('../../../assets/images/img_staff.jpeg')
    }

    return (
        <View style={styles.contentView}>
            <Text style={styles.title}>
                {item?.title}
            </Text>
            <TouchableOpacity
                onPress={onTapPhone}>
                <InfoItem
                    icon='call'
                    value={item?.phone} />
            </TouchableOpacity>
            <InfoItem
                icon='mail'
                value={item?.email} />
            <InfoItem
                icon='location'
                value={item?.address} />
        </View>
    )
}

export default DepartmentItem

const styles = StyleSheet.create({
    contentView: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
    },
    name: {
        color: 'black',
        fontSize: 16
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
    title: {
        color: Constant.color.text,
        fontSize: 16,
        marginBottom: 2,
        fontWeight: 'bold'
    }
})
