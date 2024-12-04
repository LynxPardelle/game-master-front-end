import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.gamemaster',
  appName: 'GameMaster',
  webDir: 'dist/game-master-ui',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:4200', // URL del servidor en modo desarrollo
    cleartext: true, // Permite conexiones HTTP en modo local
  },
};

export default config;
