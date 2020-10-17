import React, { useEffect } from 'react';
import { Text,View, Button } from 'react-native';
import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
 } from '@react-navigation/drawer';

const MyCustomDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <Button
                title="Home"
                onPress={()=> props.navigation.navigate('Home')}
            />
             <Button
                title="Users"
                onPress={()=> props.navigation.navigate('Users')}
            />

            {/* <View>
                <Text>Hello user !!</Text>
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem
                label="Contact"
                onPress={()=> alert('contact')}
            /> */}
        </DrawerContentScrollView>
    )
} 

export default MyCustomDrawer;