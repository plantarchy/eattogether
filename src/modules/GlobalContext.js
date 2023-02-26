import React, { createContext, useContext, useReducer, useState } from "react";
const bookList = [
];

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [pushToken, setPushToken] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        user, setUser,
        friends, setFriends,
        pushToken, setPushToken
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
