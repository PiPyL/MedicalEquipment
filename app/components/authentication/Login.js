import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Constant from '../../controller/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, StackActions } from '@react-navigation/core'
import APIManager from '../../controller/APIManager'
import RNProgressHud from 'progress-hud';

const Login = () => {

    const navigation = useNavigation()
    const [isView, setIsView] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const showHomeScreen = () => {
        navigation.dispatch(
            StackActions.replace(Constant.nameScreen.TabBar)
        )
    }

    const onTapLogin = () => {
        RNProgressHud.show()
        APIManager.login(email, password)
            .then(showHomeScreen)
            .catch(error => alert(error?.message))
            .finally(() => RNProgressHud.dismiss())
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <Image
                source={require('../../assets/images/img_logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>
                Quản lý thiết bị y tế
            </Text>
            <Text style={styles.text}>
                Bệnh viện Kiến An
            </Text>
            <View style={styles.emailView}>
                {/* <Text style={styles.title}>
                    Email
                </Text> */}
                <TextInput
                    placeholder='Nhập email'
                    style={styles.emailInput}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.passwordView}>
                {/* <Text style={styles.title}>
                    Mật khẩu
                </Text> */}
                <TextInput
                    placeholder='Nhập mật khẩu'
                    style={styles.passwordInput}
                    secureTextEntry={!isView}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                    onPress={() => setIsView(!isView)}
                >
                    <Ionicons name='eye' size={28} color='gray' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={onTapLogin}
                style={styles.loginButton}>
                <Text style={styles.loginText}>
                    Đăng nhập
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    emailInput: {
        height: 56,
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 16,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2
    },
    emailView: {
        marginHorizontal: 20,
        marginTop: 20
    },
    passwordView: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 56,
        borderRadius: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'white',
        elevation: 2
    },
    passwordInput: {
        fontSize: 16,
        flex: 1
    },
    title: {

    },
    loginButton: {
        height: 56,
        borderRadius: 40,
        backgroundColor: Constant.color.main,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 30
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})
