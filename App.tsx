import { View } from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Icon, Text } from '@components';
import { theme } from '@theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
          <Text>Olá</Text>

          <Icon name="arrowCircleDown" color="accentBlue" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
