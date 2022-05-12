import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Button
                title="main"
                onPress={() =>
                    this.props.navigation.navigate('main')
                }
                style={styles.btn}
            />
            <Button
                title="news"
                onPress={() =>
                    this.props.navigation.navigate('news')
                }
                style={styles.btn}
            />
            {/*<StatusBar style="auto" />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    btn: {
        marginTop: 24
    }
});
