"use client";

import { detectIranianUser } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useIranDetection() {
  const [isFromIran, setIsFromIran] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const geoCookie = cookies.find((c) =>
      c.trim().startsWith("geo-country="),
    );

    if (geoCookie) {
      const country = geoCookie.split("=")[1].trim();
      if (country === "IR") {
        setIsFromIran(true);
        return;
      }
    }

    if (detectIranianUser()) {
      setIsFromIran(true);
    }
  }, []);

  return isFromIran;
}
