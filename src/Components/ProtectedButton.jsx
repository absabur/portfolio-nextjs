"use client";
import React, { useEffect, useState } from "react";

const ProtectedButton = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/isLoggedin`
      );
      const result = await res.json();
      setAdmin(result.success);
    };
    authCheck();
  }, []);
  if (admin) {
    return <div onClick={(e) => e.stopPropagation()}>{children}</div>;
  } else return null;
};

export default ProtectedButton;
