import Reactotron from 'reactotron-react-native';

// A variavel __DEV__ é global no RNative, ela retorna true quando estamos
// emulando a aplicação em ambiente de desenvolvimento

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.100' })
    .useReactNative()
    .connect();

  // Adcionando uma propriedade .tron no metodo console (variavel global)
  console.tron = tron;
  tron.clear();
}
