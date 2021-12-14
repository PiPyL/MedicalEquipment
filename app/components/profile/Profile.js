import { useNavigation, StackActions } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Constant from '../../controller/Constant'
import ProfileItem from './components/ProfileItem'

const avatarWidth = 100

const Profile = () => {

    const navigation = useNavigation()

    const logOut = () => {
        navigation.dispatch(
            StackActions.replace(Constant.nameScreen.Login)
        )
    }

    return (
        <ScrollView>
            <Image
                source={require('../../assets/images/img_staff.jpeg')}
                style={styles.avatar}
            />
            <Text style={styles.name}>
                Phạm Thị H
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
