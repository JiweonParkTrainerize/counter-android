import React, { useEffect, useState } from 'react';
import {NativeModules, TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const { CounterModule } = NativeModules;

const IncrementButton = () => {
    const [counter, setCounter] = useState(0);
    const [nativeCounter, setNativeCounter] = useState(0);

    useEffect(() => {
        CounterModule.getCount((count) => {
            setNativeCounter(count)
        });
    }, []);

    const onPress = (type) => {
        if (type === 'js') {
            setCounter(prevCount => prevCount + 1);
        } else {
            CounterModule.increment();
            updateNativeCounter();
        }
    };

    const updateNativeCounter = () => {
        CounterModule.getCount((count) => {
            setNativeCounter(count)
        });
    }

    const onLongPress = (type) => {
        if (type === 'js') {
            CounterModule.getCount((count) => {
                setCounter(count)
            });
        } else {
            CounterModule.setCount(counter);
            updateNativeCounter();
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPress('js')}
                onLongPress={() => onLongPress('js')}
            >
                <Text style={styles.text}>{counter}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.nativeButton}
                onPress={() => onPress('native')}
                onLongPress={() => onLongPress('native')}
            >
                <Text style={styles.text}>{nativeCounter}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green', // Example background color
        // padding: 20, // Adds some padding inside the buttons
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
        marginBottom: 10, // Adds some space between the two buttons
        height: '50%',
    },
    nativeButton: {
        backgroundColor: 'blue', // Example background color
        // padding: 20, // Adds some padding inside the buttons
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
        marginBottom: 10, // Adds some space between the two buttons
        height: '50%',
    },
    text: {
        color: '#fff', // Example text color
        textAlign: 'center', // Ensure text is centered (useful if text wraps to a new line)
        fontSize: 40,
    },
    container: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'stretch', // Stretch children to match the width of the container
    }
  });

export default IncrementButton;