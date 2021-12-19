import React from 'react'
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const NotificationItem = ({ item }) => {

    return (
        <View style={styles.contentView}>
            <Text>
                {`Thời gian: ${item?.time}`}
            </Text>
            <Text style={styles.content}>
                {`Nội dung: ${item?.content}`}
            </Text>
            <Text>
                {`Người gửi: ${item?.sender}`}
            </Text>
        </View>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    contentView: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
    },
    content: {
        marginVertical: 2
    }
})
