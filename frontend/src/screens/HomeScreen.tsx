import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Text, Searchbar, Chip, useTheme, ActivityIndicator } from 'react-native-paper';
import { useWallpapers } from '../hooks/useWallpapers';
import WallpaperCard from '../components/WallpaperCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Wallpaper } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const CATEGORIES = ['For You', 'Minimal', 'Nature', 'Cyberpunk', 'Space', 'Abstract'];

const HomeScreen = ({ navigation }: Props) => {
    const { colors } = useTheme();
    const { wallpapers, isLoading, fetchWallpapers } = useWallpapers();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('For You');

    useEffect(() => {
        fetchWallpapers();
    }, []);

    // Split wallpapers into two columns for Masonry layout
    const leftColumn = wallpapers.filter((_, index) => index % 2 === 0);
    const rightColumn = wallpapers.filter((_, index) => index % 2 !== 0);

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.topBar}>
                <Text variant="headlineMedium" style={styles.headerTitle}>Discovery</Text>
                <View style={[styles.avatar, { backgroundColor: colors.primaryContainer }]}>
                    <Text style={{ color: colors.primary }}>JD</Text>
                </View>
            </View>

            <Searchbar
                placeholder="Search wallpapers..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchBar}
                inputStyle={styles.searchInput}
                iconColor={colors.onSurfaceVariant}
            />

            <View style={styles.categoriesContainer}>
                <FlashList<string>
                    data={CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // @ts-ignore
                    estimatedItemSize={80}
                    contentContainerStyle={styles.categoryList}
                    renderItem={({ item }: { item: string }) => (
                        <Chip
                            selected={selectedCategory === item}
                            onPress={() => setSelectedCategory(item)}
                            style={[
                                styles.chip,
                                selectedCategory === item && { backgroundColor: colors.primary }
                            ]}
                            textStyle={[
                                styles.chipText,
                                selectedCategory === item && { color: colors.onPrimary }
                            ]}
                            mode="flat"
                            showSelectedOverlay
                        >
                            {item}
                        </Chip>
                    )}
                />
            </View>

            <View style={styles.sectionHeader}>
                <Text variant="titleMedium" style={styles.sectionTitle}>Trending Now</Text>
                <Text variant="labelLarge" style={{ color: colors.primary }}>See all</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
            {isLoading ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {renderHeader()}

                    <View style={styles.masonryContainer}>
                        <View style={styles.column}>
                            {leftColumn.map((item, index) => (
                                <View key={item.id} style={styles.itemWrapper}>
                                    <WallpaperCard
                                        wallpaper={item}
                                        index={index * 2} // Original index estimate
                                        onPress={(wallpaper) => {
                                            console.log('Pressed', wallpaper.title);
                                        }}
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={styles.column}>
                            {rightColumn.map((item, index) => (
                                <View key={item.id} style={styles.itemWrapper}>
                                    <WallpaperCard
                                        wallpaper={item}
                                        index={index * 2 + 1} // Original index estimate
                                        onPress={(wallpaper) => {
                                            console.log('Pressed', wallpaper.title);
                                        }}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    masonryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        gap: 12,
    },
    column: {
        flex: 1,
        gap: 12,
    },
    itemWrapper: {
        marginBottom: 0, // Handled by gap
    },
    headerContainer: {
        paddingBottom: 8,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontFamily: 'SpaceGrotesk',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        elevation: 0,
        backgroundColor: '#2B2930', // surface-dark
        height: 50,
    },
    searchInput: {
        minHeight: 0,
    },
    categoriesContainer: {
        marginVertical: 8,
    },
    categoryList: {
        paddingHorizontal: 16,
    },
    chip: {
        marginRight: 8,
        borderRadius: 20,
        backgroundColor: '#362249', // primaryContainer
        height: 36,
    },
    chipText: {
        fontSize: 13,
        fontFamily: 'SpaceGrotesk',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    sectionTitle: {
        fontWeight: 'bold',
    },
});

export default HomeScreen;