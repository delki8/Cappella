import AsyncStorage from '@react-native-community/async-storage';

export const handleIsConnected = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      return value === 'connected';
    }
  } catch (e) {
    console.log(e);
  }
};
