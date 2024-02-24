"use client"
import { useEffect, useState } from "react";

export default function Userprofile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    fetch("/api/profile").then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoading(false);
      });
    });
  }, []);

  return {loading,data}

}
