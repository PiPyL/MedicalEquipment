import { Dimensions } from 'react-native'

export default {
    baseURL: "http://bv.qltbyt.com/api",
    onesignalKey: "",
    color: {
        main: '#2A238E',
        mainBG: '#ffd9f9',
        second: '#42c997',
        mainDisable: '#ed8e8e',
        background: '#f5f5f5',
        text: '#2E2D31',
        default: 'gray',
        tabbarInactive: 'gray',
        searchBG: '#e0e0e0',
        shadow: '#adacac',
        bgMain: '#b3d0ff',
        separator: '#ededed', //'#b5b5b5'
        bgImage: '#dedede',
        description: '#A8A8A8',
        gray: '#4d4d4d',
        bgRating: '#ebebeb',
        empty: '#747474',
        placeholderText: '#a9a9a9',
        border: '#c5c5c5',
        alertRed: '#fc3d03',
        heart_inactive: '#D8D8D8',
        heart_active: '#FF5A99',
        bgColor: '#F5F7F9',
        purple: '#B297FC',
        blue: '#0091FF',
        green: '#20D0A1',
        error: '#FF0000',
    },
    errorMsg: {
        common: 'Đã có lỗi xảy ra. Vui lòng thử lại!',
    },
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    nameScreen: {
        TabBar: 'TabBar',
        Home: 'Home',
        Profile: 'Profile',
        Settings: 'Settings',
        Message: 'Message',
        Login: 'Login',
        EquipmentList: 'EquipmentList',
        StaffList: 'StaffList',
        EquipmentDetails: 'EquipmentDetails',
        DepartmentList: 'DepartmentList'
    },
    dateFormat: {
        default: 'dd-MM-yyyy',
        calendar: 'yyyy-MM-dd',
        dateTime: 'dd-MM-yyyy HH:mm',
        timeDate: 'HH:mm dd-MM-yyyy',
        hourMinute: 'HH:mm',
        dayOfWeek: 'EEEE, dd-MM-yyyy',
        full: 'HH:mm:ss dd-MM-yyyy',
        voucher: 'yyyy-MM-dd HH:mm:ss'
    },
    keys: {
        isOpened: 'isOpened',
        currentUser: 'currentUser'
    },
    homeData: [
        {
            title: 'Thiết bị',
            icon: require('../assets/images/ic_medical_equipment.png'),
            color: '#ffd45e',
            screen: 'EquipmentList'
        },
        {
            title: 'Tổ chức',
            icon: require('../assets/images/ic_organization.png'),
            color: '#ff845e',
            screen: 'DepartmentList'
        },
        {
            title: 'Nhân viên',
            icon: require('../assets/images/ic_employees.png'),
            color: '#50d997',
            screen: 'StaffList'
        },
        {
            title: 'Vật tư',
            icon: require('../assets/images/ic_supplies.png'),
            color: '#45d0e6'
        },
        {
            title: 'Báo hỏng',
            icon: require('../assets/images/ic_notification.png'),
            color: '#ecadf0'
        },
        {
            title: 'Kiểm kê',
            icon: require('../assets/images/ic_statistics.png'),
            color: '#ff96a6'
        }
    ],
    staffData: [
        {
            name: 'Nguyễn Văn A',
            phone: '0394827622',
            email: 'aaaaaa@gmail.com',
            type: 'Admin'
        },
        {
            name: 'Phạm B',
            phone: '039482888',
            email: 'nnnnn@gmail.com',
            type: 'Tester'
        },
        {
            name: 'Lê Công C',
            phone: '099999999',
            email: 'iiiiiiii@gmail.com',
            type: 'Admin'
        },
        {
            name: 'Nguyễn Ngọc D',
            phone: '0888888888',
            email: 'eeeeeeee@gmail.com',
            type: 'NVKP'
        },
        {
            name: 'Trần Ánh E',
            phone: '0777777777',
            email: 'uuuuuuuuu@gmail.com',
            type: 'Doctor'
        },
        {
            name: 'Cao Thị G',
            phone: '0555555555',
            email: 'wwwwww@gmail.com',
            type: 'Nurse'
        }
    ]
}

