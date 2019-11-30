import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({
      server: '10.0.3.2', // for Genymotion
      port: 3334,
      enabled: true,
    });

  tron.clear()

  console.tron = tron
}
