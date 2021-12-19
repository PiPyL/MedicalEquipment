import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotificationItem from './NotificationItem'

const NotificationList = () => {

    const [data, setData] = useState([
        {
            time: '2021-12-13 20:52:23',
            content: 'Phiếu đề nghị thanh lý thiết bị Máy hút dịch Yuwell',
            sender: 'Admin'
        }
    ])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <NotificationItem item={item} />}
                keyExtractor={(item) => item?.time}
                contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
    )
}

export default NotificationList

const styles = StyleSheet.create({
    flatListContent: {
        paddingTop: 12
    }
})
