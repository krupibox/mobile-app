import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mobile.capacitor4test.app',
  appName: 'mobile-capacitor-app',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    cleartext:  true,
  }
};

export default config;
