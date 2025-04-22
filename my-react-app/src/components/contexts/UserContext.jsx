import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reputation, setReputation] = useState(0);

  return (
    <UserContext.Provider value={{
      user,
      reputation,
      setUser,
      setReputation
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);