import { useEffect } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import { useNavigate } from "react-router-dom";

export default function AppDeepLinkHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Setting up deep link listener");
    const listener = CapacitorApp.addListener('appUrlOpen', (event) => {
      console.log("Deep link received:", event.url);
      try {
        const parsed = new URL(event.url);
        const token = parsed.searchParams.get('token');
        console.log("Extracted token:", token);

        if (token) {
          navigate(`/verify?token=${token}`);
        }
      } catch (err) {
        console.error("Error parsing deep link:", err);
      }
    });

    return () => {
      console.log("Removing deep link listener");
      listener.remove();
    };
  }, [navigate]);

  return null;
}
