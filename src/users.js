import React from 'react';
import { Text,View, Button } from 'react-native';

const Users  = (props) => {
    return(
        <View>
            <Text>Users</Text>
            <Button
                title="Go back"
                onPress={()=> props.navigation.goBack() }
            />
        </View>
    )
}

export default Users;