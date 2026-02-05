import { create } from 'zustand';
import { Wallpaper } from '../types';

interface WallpaperState {
    wallpapers: Wallpaper[];
    isLoading: boolean;
    error: string | null;
    fetchWallpapers: () => Promise<void>;
}

const API_BASE_URL = 'http://10.108.81.102:8005';

export const useWallpapers = create<WallpaperState>((set) => ({
    wallpapers: [],
    isLoading: false,
    error: null,
    fetchWallpapers: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${API_BASE_URL}/wallpapers/`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            set({ wallpapers: data, isLoading: false });
        } catch (err) {
            set({ error: 'Failed to fetch wallpapers', isLoading: false });
        }
    },
}));
