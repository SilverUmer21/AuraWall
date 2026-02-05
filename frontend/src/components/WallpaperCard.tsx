import React, { memo, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { Text, useTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Wallpaper } from '../types';

interface WallpaperCardProps {
    wallpaper: Wallpaper;
    onPress: (wallpaper: Wallpaper) => void;
    index: number;
}

const WallpaperCard = memo(({ wallpaper, onPress, index }: WallpaperCardProps) => {
    const { colors } = useTheme();

    // Aspect ratio calculation for Masonry layout
    // We use the actual image dimensions if available, otherwise fallback
    const aspectRatio = wallpaper.width && wallpaper.height
        ? wallpaper.width / wallpaper.height
        : 0.6; // Default portrait aspect ratio

    return (
        <Pressable
            onPress={() => onPress(wallpaper)}
            style={({ pressed }) => [
                styles.container,
                {
                    aspectRatio,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    opacity: pressed ? 0.9 : 1
                }
            ]}
        >
            <Image
                source={{ uri: wallpaper.uri }}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
                transition={200}
                cachePolicy="memory-disk"
            />

            {/* Gradient Overlay for text legibility */}
            <View style={styles.gradientOverlay} />

            {/* Glassmorphic Label */}
            <View style={styles.infoContainer}>
                <BlurView intensity={30} tint="dark" style={styles.glassLabel}>
                    <View style={styles.textContainer}>
                        <Text variant="labelSmall" style={styles.title} numberOfLines={1}>
                            {wallpaper.title}
                        </Text>
                        <Text variant="bodySmall" style={styles.category}>
                            {wallpaper.category}
                        </Text>
                    </View>

                    <View style={styles.likesContainer}>
                        <MaterialIcons name="favorite" size={12} color="white" />
                        <Text variant="labelSmall" style={styles.likes}>
                            {wallpaper.likes > 1000 ? `${(wallpaper.likes / 1000).toFixed(1)}k` : wallpaper.likes}
                        </Text>
                    </View>
                </BlurView>
            </View>

            {wallpaper.premium && (
                <BlurView intensity={20} style={styles.premiumBadge}>
                    <MaterialIcons name="star" size={12} color="#FFD700" />
                    <Text variant="labelSmall" style={styles.premiumText}>PRO</Text>
                </BlurView>
            )}
        </Pressable>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 6,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#333',
        position: 'relative',
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    infoContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        right: 8,
    },
    glassLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'rgba(25, 16, 34, 0.4)', // Fallback
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    },
    category: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 10,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    likes: {
        color: 'white',
        fontWeight: 'bold',
    },
    premiumBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    premiumText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    }
});

export default WallpaperCard;
