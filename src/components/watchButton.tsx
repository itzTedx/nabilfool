"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const WatchButton = () => {
  const router = useRouter();
  return (
    <Button
      size="lg"
      className="text-xl mt-6"
      variant="outline"
      onClick={() => router.push("/nabil")}
    >
      Watch Now
    </Button>
  );
};

export default WatchButton;
