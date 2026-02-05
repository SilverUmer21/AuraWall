import React, { useEffect } from 'react';
import { StyleSheet, View, AccessibilityInfo } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { Image } from 'expo-image';

interface ParallaxPreviewProps {
    imageUri: string;
}

export const ParallaxPreview = ({ imageUri }: ParallaxPreviewProps) => {
    const rotation = useSharedValue({ x: 0, y: 0 });
    const reduceMotion = useSharedValue(false);

    useEffect(() => {
        AccessibilityInfo.isReduceMotionEnabled().then(enabled => {
            reduceMotion.value = enabled;
        });

        const subscription = DeviceMotion.addListener((event) => {
            if (!reduceMotion.value && event.rotation) {
                // Beta = x-axis (front/back), Gamma = y-axis (left/right)
                // We invert or adjust based on desired feel
                const y = event.rotation.beta * 20; // Tilt up/down moves image up/down
                const x = event.rotation.gamma * 20; // Tilt left/right moves image left/right

                rotation.value = {
                    x: withSpring(x),
                    y: withSpring(y)
                };
            }
        });

        DeviceMotion.setUpdateInterval(16); // ~60fps

        return () => subscription.remove();
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: rotation.value.x },
            { translateY: rotation.value.y },
            { scale: 1.1 }, // Scale up to prevent edges showing
        ],
    }));

    return (
        <View style={styles.container}>
            <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
                <Image
                    source={{ uri: imageUri }}
                    style={StyleSheet.absoluteFill}
                    contentFit="cover"
                />
            </Animated.View>
            <View style={styles.overlay} pointerEvents="none" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
    }
});
