import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Http } from "@capacitor-community/http";

export default function Verify() {
    const [message, setMessage] = useState("Verifying...");
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const verifyToken = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get("token");

            if (!token) {
                setMessage("No token provided.");
                setStatus("error");
                return;
            }

            const platform = Capacitor.getPlatform();
            let apiUrl = "";

            if (platform === "web") {
                apiUrl = `http://localhost:5000/api/auth/verified?token=${token}`;
            } else if (platform === "android") {
                apiUrl = `http://10.0.2.2:5000/api/auth/verified?token=${token}`;
            } else if (platform === "ios") {
                apiUrl = `http://192.168.0.178:5000/api/auth/verified?token=${token}`;
            }

            try {
                const res = await Http.get({
                    url: apiUrl,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {}
                });

                if (res.status === 200 && res.data?.message === "Token is valid") {
                    setMessage("Your email has been successfully verified!");
                    setStatus("success");
                } else {
                    setMessage(res.data?.message || "Verification failed.");
                    setStatus("error");
                }
            } catch (err) {
                console.error("Verification error:", err);
                setMessage("Verification failed or link expired.");
                setStatus("error");
            }
        };

        verifyToken();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-pink-600">
                    {status === "loading"
                        ? "Verifying..."
                        : status === "success"
                            ? "✅ Verified"
                            : "❌ Verification Failed"}
                </h2>
                <p className="text-gray-700">{message}</p>
                {status !== "loading" && (
                    <a
                        href="/login"
                        className="mt-4 inline-block text-pink-500 hover:underline"
                    >
                        Go to Login
                    </a>
                )}
            </div>
        </div>
    );
}
