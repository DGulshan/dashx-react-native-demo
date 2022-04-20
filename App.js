import Config from 'react-native-config';
import DashX from '@dashx/react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

DashX.setLogLevel(0);

DashX.setup({
  publicKey: Config.DASHX_PUBLIC_KEY,
  baseUri: 'http://api.dashx-local.com:8080/graphql',
  trackAppLifecycleEvents: false,
  trackScreenViews: false,
  targetEnvironment: Config.DASHX_TARGET_ENVIRONMENT || 'production'
});

export default function App() {
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
