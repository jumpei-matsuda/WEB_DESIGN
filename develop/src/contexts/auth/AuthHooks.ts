/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from "react";
import { firebase } from 'configure/firebase';

type UseProvideAuth = {
  user: firebase.User | null,
  signin: (email: string, password: string) => Promise<firebase.User | null> | void,
  signup: (email: string, password: string) => Promise<firebase.User | null> | void,
}

const initialState: UseProvideAuth = {
  user: null,
  signin: () => { },
  signup: () => { },
}

// コンテクストオブジェクト
export const authContext = createContext(initialState);

/**
 * コンテクストオブジェクトの現在値を返すフック
 */
export const useAuth = (): UseProvideAuth => useContext(authContext);

/**
 * コンテキストオブジェクトを更新するフック
 * @returns 
 */
export const useProvideAuth = (): UseProvideAuth => {
  const [user, setUser] = useState<firebase.User | null>(null);

  // サインイン
  const signin = (email: string, password: string) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);

        return response.user;
      }));

  // サインアップ
  const signup = (email: string, password: string) => (
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);

        return response.user;
      }));

  return {
    user,
    signin,
    signup,
  }
}
