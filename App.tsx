import { Text, View } from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '@theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20 }}>Olá</Text>
          <Text
            style={{ fontSize: 20, fontFamily: 'Roboto Condensed SemiBold' }}
          >
            Olá
          </Text>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
