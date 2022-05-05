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
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
