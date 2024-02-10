"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const LogoutPage = () => {
  const { data } = useSession();
  useEffect(() => {
    data && signOut({ callbackUrl: "/signin", redirect: true });
  }, [data]);

  return <>LogoutPage</>;
};

export default LogoutPage;
