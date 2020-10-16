import React from 'react';
import { Text,View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

const Users  = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const {id,codeName} = route.params;

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