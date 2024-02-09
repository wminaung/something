"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const LogoutPage = () => {
  const { data } = useSession();
  useEffect(() => {
    data && signOut({ callbackUrl: "/login", redirect: true });
  }, [data]);

  return <>LogoutPage</>;
};

export default LogoutPage;
