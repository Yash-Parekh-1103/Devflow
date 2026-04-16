"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useClerkJWT } from "@/hook/useClerkJWT";

const GetStartedPage = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { getJWT } = useClerkJWT();
  const [message, setMessage] = useState("Checking your account details...");

  useEffect(() => {
    const checkUserRole = async () => {
      if (isLoaded && user) {
        const role = user.publicMetadata?.role;

        if (role) {
          router.push("/dashboard");
        } else {
          setMessage("No role found, assigning one now...");
          const token = await getJWT();
          if (token) {
            try {
              const response = await fetch('http://localhost:5000/api/auth/assign-role', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });

              if (response.ok) {
                setMessage("Role assigned! Redirecting to dashboard...");
                // refetch user data or wait for clerk to sync
                await user.reload();
                router.push("/dashboard");
              } else {
                setMessage("There was an error assigning your role.");
              }
            } catch (error) {
              console.error("Failed to assign role", error);
              setMessage("Failed to communicate with the server.");
            }
          }
        }
      }
    };

    checkUserRole();
  }, [user, isLoaded, router, getJWT]);

  return <div>{message}</div>;
};

export default GetStartedPage;
