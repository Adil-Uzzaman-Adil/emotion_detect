import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import { DetectionProvider } from './context/DetectionContext';
import ToastProvider from './components/common/Toast';

export default function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <DetectionProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </DetectionProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}