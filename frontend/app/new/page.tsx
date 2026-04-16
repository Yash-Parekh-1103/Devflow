"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NewPage = () => {
  return <div>Welcome, Admin! This is the protected /new page.</div>;
};

export default NewPage;
