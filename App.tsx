import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button, Screen, Text } from '@components';
import { theme } from '@theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen>
          <Text>Olá</Text>

          <Button title="Logar" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
