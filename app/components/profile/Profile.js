import { useNavigation, StackActions } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppManager from '../../controller/AppManager'
import Constant from '../../controller/Constant'
import StorageManager from '../../controller/StorageManager'
import ProfileItem from './components/ProfileItem'

const avatarWidth = 100

const Profile = () => {

    const navigation = useNavigation()

    const logOut = async () => {
        AppManager.shared.currentUser = null
        await StorageManager.setData(Constant.keys.currentUser, null)
        navigation.dispatch(
            StackActions.replace(Constant.nameScreen.Login)
        )
    }

    const getAvatar = () => {
        if (AppManager.shared.currentUser?.profile_photo_url) {
            return { uri: AppManager.shared.currentUser?.profile_photo_url }
        }
        return require('../../assets/images/img_staff.jpeg')
    }

    return (
        <ScrollView>
            <Image
                source={getAvatar()}
                style={styles.avatar}
            />
            <Text style={styles.name}>
                {AppManager.shared.currentUser?.name}
            </Text>
            <ProfileItem
                icon='log-out-outline'
                value='Đăng xuất'
                onPress={logOut}
            />
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    avatar: {
        width: avatarWidth,
        height: avatarWidth,
        borderRadius: avatarWidth / 2,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 25,
        marginBottom: 16
    },
    name: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 16
    }
})
