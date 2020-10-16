import React, { useEffect } from 'react';
import { Text,View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

const Users  = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const {id,codeName} = route.params;

    useEffect(()=>{
        setTimeout(()=>{
            navigation.setOptions({
                headerRight:()=> <Button
                    title="say somthing"
                    onPress={()=> alert('something')}
                />
            })
        },2000)
    },[navigation])


    return(
        <View>
            <Text>ID:{id}</Text>
            <Text>CodeName:{codeName}</Text>
            <Button
                title="Go back"
                onPress={()=> navigation.navigate('Home',{
                    active:'yes'
                }) }
            />
            <Button
                title="change header"
                onPress={()=> navigation.setOptions({
                    title:'something else'
                })}
            />
        </View>
    )
}

export default Users;