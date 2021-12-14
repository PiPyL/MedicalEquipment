import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constant from '../../controller/Constant'
import CategoryItem from './components/CategoryItem'

const Home = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.searchView}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Nhập để tìm kiếm...'
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons
                        name='search'
                        size={22}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={Constant.homeData}
                renderItem={({ item }) => <CategoryItem item={item} />}
                keyExtractor={(item) => item.title}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    searchView: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 16,
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 16,
    },
    searchInput: {
        flex: 1
    },
    searchButton: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 16
    }
})
