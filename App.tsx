/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux';
import { PersistGate } from 'redux-persist/integration/react'
import { MainNavigator } from './src/navigation';


function App(): React.JSX.Element {

  // const setToken = async () => {
  //   await AsyncStorage.setItem('token', JSON.stringify('token'))
  // }
  // const removeToken = async () => {
  //   await AsyncStorage.removeItem('token')
  // }

  // useEffect(() => {
  //   // removeToken()
  // }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;