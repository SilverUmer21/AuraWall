export interface Wallpaper {
    id: string;
    title: string;
    category: string;
    uri: string;
    likes: number;
    premium?: boolean;
    width?: number;
    height?: number;
}

export type RootStackParamList = {
    Home: undefined;
    WallpaperDetail: { wallpaper: Wallpaper };
};
