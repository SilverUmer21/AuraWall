import { MD3DarkTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
    displaySmall: {
        fontFamily: 'SpaceGrotesk',
        fontSize: 36,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 44,
    },
    displayMedium: {
        fontFamily: 'SpaceGrotesk',
        fontSize: 45,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 52,
    },
    displayLarge: {
        fontFamily: 'SpaceGrotesk',
        fontSize: 57,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 64,
    },
};

export const AuraTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#7f0df2',
        onPrimary: '#ffffff',
        primaryContainer: '#362249',
        onPrimaryContainer: '#eaddff',
        secondary: '#ccc2dc',
        onSecondary: '#332d41',
        background: '#191022',
        onBackground: '#e6e1e5',
        surface: '#191022',
        onSurface: '#e6e1e5',
        surfaceVariant: '#49454f',
        onSurfaceVariant: '#cac4d0',
        outline: '#938f99',
    },
    // fonts: configureFonts({config: fontConfig}), // Will enable after font loading setup
};
