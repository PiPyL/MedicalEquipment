import React from 'react'
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Constant from '../../../controller/Constant'
import InfoItem from './InfoItem'

const EquipmentItem = ({ item }) => {

    const onTapPhone = () => {
        Linking.openURL(`tel:${item?.phone}`)
    }

    return (
        <View style={styles.contentView}>
            <FastImage
                resizeMode='contain'
                source={require('../../../assets/images/img_staff.jpeg')}
                style={styles.image} />
            <View style={styles.infoView}>
                <Text style={styles.name}>
                    {item?.type}
                </Text>
                <InfoItem
                    icon='person'
                    value={item?.name} />
                <TouchableOpacity
                    onPress={onTapPhone}>
                    <InfoItem
                        icon='call'
                        value={item?.phone} />
                </TouchableOpacity>
                <InfoItem
                    icon='mail'
                    value={item?.email} />
            </View>
        </View>
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
    }
})
