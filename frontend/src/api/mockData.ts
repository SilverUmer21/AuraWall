import { Wallpaper } from '../types';

const MOCK_WALLPAPERS: Wallpaper[] = [
    {
        id: '1',
        title: 'Neon Pulse',
        category: 'Cyberpunk',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO-_Yg67qgu6L5z-TqPRzIeSELqW3BHitggk1EaGgoEQzymqIGl8nuqAyt9oqXwRfn4Rutcnt_3UL2RKDp_HyojA9sUZq3Y5yO1p633xk0CtsBdJCCRRB8n-nCL70-VwhwiPxkeVtGmg65OnBiY_-tD8LgiKe8uy6YTu9I0iRMMo7rz8gK2yh4pd1-sNhc8NjuYoLaJkOkEZeZYP4MpxsFfNhQphFUzmghBZv5oZgNlWp3cMeJQLryAkhqsU_8oVrse_jKTTuxhqV3',
        likes: 1200,
        width: 600,
        height: 1000,
    },
    {
        id: '2',
        title: 'Pure Geometry',
        category: 'Minimal',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzXyx2VKrh9Uz46bWv37Rt3PmsO8YbrTwF7iZFX6aYAVoxF_cGkZJW_Jbzipx8SlVCUiGl02QFRA4LPyaQp-B5tl4wRXTv1JKbt7CRMRz0yOzI-WPpbXCihX-TR13rol_ajHqQLiHSW1ODb97vPxcOoXKTAGcLenfAtZDI8dYPrlEaimyOZUv3Fr1xOzoHSn3Ahuusr6mnDMT5Smv14ZSrVXipZq9jrFvrZ1XnshT3yDKws-okPrYB-qiT2pu87tMWUG73k9VJfw4R',
        likes: 842,
        width: 600,
        height: 800,
        premium: true,
    },
    {
        id: '3',
        title: 'Misty Peaks',
        category: 'Nature',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-rVa4e_h6QwnG8Hz8OcOuAXJPbLZch2h2Q-xe8mX1BYrJ5YOE5Qb33BBqZpyWj5TMFgSzsEZLa-oaREjurMSGRKZ5tE3Y0F9-ccBQhUBpv4goEcWM20uJNKkJsKYjGvdj5qSrsb4dciyZ5Qla_OJojNvaCofE3ZW6KIVWou4Qal_87NShLf65ffyWB614ys9fkqy1zpP2MYAHf3Utd4oZdmNDoZEMmJ51v-hBVBiT58LkvgwRFR8EeoiB-j2d2XGGeSQ8ZbNyUuxl',
        likes: 2500,
        width: 600,
        height: 800,
    },
    {
        id: '4',
        title: 'Violet Galaxy',
        category: 'Space',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwab5XnnUq29ykyC0zuUiq5BLYBcRr58mKUl90wb8edz9IiS5Eg74Yb2Tmhzf-4PlZ4yqV5v9bODbYQPb66ZoiiFENEGLhX9vy7kldPnsiOXO45Z_MEnl5jqBDSyXZFVcw7y3z_Zq62y9arPqdF3H5FS0rHad_aVQ0rVORzmCiflhWZhliEnb_3Wk3vgtoRhgZhZiweFpmONJUShBp0sa6TDkfw1GLUfn6zMzyV31mZ0EV1TF1zpTMjyBZRzKR7miSVBTFEjItauqE',
        likes: 3100,
        width: 600,
        height: 1000,
    },
    {
        id: '5',
        title: 'Carbon Dark',
        category: 'Abstract',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcjz8mtyFiPBy0WhDWTGjSCwnyVsAqh3nrS_ShhrVcdKaD3lTGoX61YAiQJNHisRhj78yiMM3ykhx2ln1REUN-fCNVUkjFPSKYSw280Db-ZpKb7oxj6k7XvhqhjNxO9gDIOXDu32M2nT5F5cRXzBYjT9wtSHV9El41By33m4jFIOsv4BVDjSsaD6lZlxADKrHImnjEZUEM5VwpRT9ONQwbifBkzOeModQpwtVER_x3qn7W83WCX1WdNGlNV6TUgEh2ctXZeJqVhV0E',
        likes: 510,
        width: 600,
        height: 1000,
    },
    {
        id: '6',
        title: 'Amazon Green',
        category: 'Nature',
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7tu4UKIxLvMudNJL1xJ8Zi-NumCGse3vcECIwC2ls1oTAQSG4aCGrrxZuFt3pHfiFA1T-tj9LKoHoA4QtwC852-oaGYYHAfawVjodcN4D7Z4ViIZzz0bmau2CMXZOhlsji2kedylDE2Ag7C-hpt6td5gLou0GsWPiHyygU9V39C3rzahYLcbpdeJA6gKGo62xaClQHfH-iUZkF7T_c-H-E4hC8ARB9XSEvvk4V2uyOIMUpI7AbbULV72hwipD4ZlFRvmS-KU-x4A2',
        likes: 1800,
        width: 600,
        height: 800,
    },
];

export const MockWallpaperService = {
    getWallpapers: async (): Promise<Wallpaper[]> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return MOCK_WALLPAPERS;
    },
};
