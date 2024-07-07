"use client";
import { useQuery } from "@tanstack/react-query";

export default function Userprofile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("/api/profile");
      if (!response.ok) {
        throw new Error("Network Responses was not ok ");
      }
      return response.json();
    },
    staleTime: Infinity,
  });

  return { data, isLoading, isError };
}
