"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/isLoggedin`
        );
        const result = await res.json();
        setAdmin(result.success);
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setLoading(false);
      }
    };
    authCheck();
  }, []);

  return (
    <AuthContext.Provider value={{ admin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
