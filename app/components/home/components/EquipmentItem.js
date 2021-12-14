import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Constant from '../../../controller/Constant'

const heightItem = 100

const EquipmentItem = () => {
    return (
        <View style={styles.contentView}>
            <FastImage
                resizeMode='contain'
                source={require('../../../assets/images/img_noi_soi.jpeg')}
                style={styles.image} />
            <View style={styles.infoView}>
                <Text style={styles.name}>
                    Thiết bị nội soi nhập khẩu Hàn Quốc, chất lượng cao
                </Text>
                <Text style={styles.model}>
                    Model: SOMATOM go.Now (11061618) asdjaskhd ashkas d
                </Text>
                <Text style={styles.serial}>
                    Serial: 107462
                </Text>
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
