const users = [
    {
        name: 'brynn',
        avatar: 'https://cdn.applysquare.net/storage/tmp/qa/thread/DmMz5AkpU.jpg'
    },
    {
        name: 'brynn1',
        avatar: 'https://cdn.applysquare.net/storage/tmp/qa/thread/DmMz5AkpU.jpg'
    },
]


import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
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

                <View style={styles.header}>
                    <Text style={styles.headerText}>- Noter -</Text>
                </View>

                <ScrollView style={flex = 1}>
                    <Card title="Select Available Day">
                        {
                            users.map((u, i) => {
                                let temp = u.avatar;
                                return (

                                    <View key={i} style={{height: 60, flex: 1, flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 50, height: 50, position: 'relative' }}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}

                                        />
                                        <Text style={{fontSize: 20, marginLeft: 20,}}>{u.name}</Text>
                                        <Button
                                            icon={<Icon name='code' color='#ffffff' />}
                                            backgroundColor='#03A9F4'
                                            buttonStyle={{ borderRadius: 0, marginLeft: 50, marginRight: 0, marginBottom: 0, position: 'absolute', alignItems: 'flex-end' }}
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
