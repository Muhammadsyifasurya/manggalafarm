"use client";
// UserContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface User {
  email: string | null;
  uid: string;
  displayName?: string | null;
}

interface UserContextType {
  user: User | null;
  username: string | null;
  logan: (userData: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

// Tambahkan ReactNode pada tipe children
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logan = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  const username = user?.email ? user.email.split("@")[0] : null;

  return (
    <UserContext.Provider value={{ user, username, logan, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
