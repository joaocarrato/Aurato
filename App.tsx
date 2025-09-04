import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SignInScreen } from '@screens';
import { theme } from '@theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignInScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
