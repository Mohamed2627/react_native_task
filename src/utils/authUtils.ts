import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "./models";

export const handleLogin = async (userData: IUser) => {
  try {
    const allUsers = await AsyncStorage.getItem('allUsers');
    if (allUsers) {
      const userFound = JSON.parse(allUsers).find((user: IUser) => user.email.toLowerCase() == userData.email.toLowerCase())
      if (userFound) {
        if (userFound.password == userData.password) {
          await AsyncStorage.setItem('token', JSON.stringify(userData.email));
          return AUTH_STATUS.AUTHENTICATED
        } else {
          return AUTH_STATUS.NOT_AUTHENTICATED
        }
      } else {
        return AUTH_STATUS.NOT_FOUND;
      }
    } else {
      return AUTH_STATUS.NOT_FOUND;
    }
  } catch (error) {
    return error
  }
}


export const isUserLogedIn = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token ? true : false
  } catch (error) {
    return false
  }
}


export const handleSignUp = async (userData: IUser) => {
  try {
    const allUsers = await AsyncStorage.getItem('allUsers');
    if (allUsers) {
      const parsedUsers = JSON.parse(allUsers);
      await AsyncStorage.setItem('allUsers', JSON.stringify([...parsedUsers, userData]));
    } else {
      await AsyncStorage.setItem('allUsers', JSON.stringify([userData]))
    }
    return true
  } catch (error) {
    return false
  }
}

export const removeToken = async () => {
  return AsyncStorage.removeItem('token').then(() => true).catch(() => false)
}

export enum AUTH_STATUS {
  NOT_AUTHENTICATED,
  AUTHENTICATED,
  NOT_FOUND
}