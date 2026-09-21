export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Emotion Detect',
  APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  ANALYTICS_URL: import.meta.env.VITE_ANALYTICS_URL || '',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
};