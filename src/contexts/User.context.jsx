import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export function UserProvider(props) {
  function signUp(email, password) {
    // salvam valorile in baza de date
    // utilizatorul creat il salvam in state-ul acestui component
    // returnam utilizatorul creat
  }

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        signUp: signUp,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
