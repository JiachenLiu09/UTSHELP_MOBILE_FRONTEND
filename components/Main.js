const users = [
    {
        date: '23/10/19',
        room: 'CB11.00.00'
    },
    {
        date: '23/10/19',
        room: 'CB11.00.00'
    },
]


import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback } from 'react-native-elements'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Main extends React.Component {
    render() {
        return (

            <View style={styles.container}>

                

                <ScrollView style={flex = 1}>
                    <Card title="Select Available Day">
                        {
                            users.map((u, i) => {
                                let temp = u.avatar;
                                return (

                                    <View key={i} style={{height: 60, flex: 1, flexDirection: 'row' }}>
                                        <Button
                                            style={{ width: 50, height: 50, position: 'relative', backgroundColor: 'yellow' }}
                                            title={u.room}
                                            disabled
                                            color='yellow'
                                        />
                                        
                                        <Text style={{fontSize: 20, marginLeft: 30,marginTop: 5}}>{u.date}</Text>
                                        <Button
                                            icon={<Icon name='code' color='#ffffff' />}
                                            backgroundColor='#03A9F4'
                                            buttonStyle={{ borderRadius: 0, marginLeft: 40, marginRight: 0, marginBottom: 0, position: 'absolute', alignItems: 'flex-end' }}
                                            title='Book' />
                                    </View>
                                );
                            })
                        }
                    </Card>
                </ScrollView>

                <View style={styles.footer}>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
