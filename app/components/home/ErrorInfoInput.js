import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import APIManager from '../../controller/APIManager'
import Constant from '../../controller/Constant'
import RNProgressHud from 'progress-hud';

const ErrorInfoInput = () => {

    const route = useRoute()
    const equipmentId = route.params?.id ?? ''
    const equipmentName = route.params?.name ?? ''
    const [reason, setReason] = useState('')
    const navigation = useNavigation()

    const onSuccessed = () => {
        RNProgressHud.dismiss()
        Alert.alert('Thông báo', 'Báo hỏng thành công', [
            {
                text: 'OK',
                onPress: () => navigation.goBack()
            }
        ])
    }

    const onFailed = () => {
        Alert.alert('Thông báo', Constant.errorMsg)
    }

    const requestError = () => {
        if (reason === '') {
            Alert.alert('Thông báo', 'Vui lòng nhập lý do hỏng!')
            return
        }
        RNProgressHud.show()
        APIManager.requestError(equipmentId, reason)
            .then(onSuccessed)
            .catch(onFailed)
            .catch(() => RNProgressHud.dismiss())
    }

    return (
        <SafeAreaView style={styles.rootView}>
            <ScrollView>
                <Text style={styles.requestDes}>
                    Báo hỏng thiết bị
                </Text>
                <Text style={styles.name}>
                    {equipmentName}
                </Text>
                <View style={styles.reasonView}>
                    <TextInput
                        style={styles.reasonInput}
                        value={reason}
                        multiline
                        onChangeText={text => setReason(text)}
                        placeholder='Nhập lý do hỏng tại đây...'
                    />
                </View>

                <TouchableOpacity
                    onPress={requestError}
                    style={styles.requestTouch}>
                    <Text style={styles.requestText}>
                        Báo hỏng
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ErrorInfoInput

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        paddingHorizontal: 16
    },
    requestDes: {
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 6,
        textAlign: 'center'
    },
    name: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center'
    },
    reasonTitle: {
        marginTop: 10
    },
    reasonView: {
        backgroundColor: 'white',
        marginTop: 16,
        borderRadius: 8,
        height: 250,
        paddingHorizontal: 10
    },
    requestText: {
        color: 'white',
        fontSize: 16
    },
    requestTouch: {
        height: 44,
        backgroundColor: Constant.color.main,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        alignSelf: 'center',
        marginTop: 30,
    },
})
